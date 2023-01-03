/* eslint-disable jsx-a11y/no-static-element-interactions */
import SmallButton from 'components/reusables/buttons/smallButton/smallButton';
import SendIcon from 'components/reusables/icons/send';
import getClassName from 'functions/getClassName';
import useAuthContext from 'hooks/context/useAuthContext';
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { CommentsProps } from 'types/data';
import createUID from 'create-unique-id';
import useNoteViewContext from '../../shared/hooks/useNoteViewContext';
import Comment from './comment/comment';
import styles from './comments.module.css';

const Comments = () => {
  // @ts-ignore
  const { user, socket } = useAuthContext();
  // @ts-ignore
  const {
    noteComments,
    setNoteComments,
  }: {
    noteComments: CommentsProps;
    setNoteComments: Dispatch<SetStateAction<CommentsProps>>;
  } = useNoteViewContext();
  const [isEmpty, setIsEmpty] = useState(true);
  const commentContainer = useRef<HTMLDivElement | null>(null);
  const commentInput = useRef<HTMLDivElement | null>(null);
  const firstRender = useRef(true);

  const randomId: string = createUID(10);

  // Handle scrolling when comments are added
  useEffect(() => {
    const scrollToBottom = (behavior: ScrollBehavior = 'smooth') => {
      commentContainer.current?.scrollTo({
        top: commentContainer.current.scrollHeight,
        left: 0,
        behavior,
      });
    };
    if (firstRender.current) {
      scrollToBottom('auto');
      firstRender.current = false;
      return;
    }
    setTimeout(() => {
      // @ts-ignore
      scrollToBottom('smooth');
    }, 0);
  }, [noteComments]);

  const handleSubmit = () => {
    const textContent = commentInput.current?.textContent;
    if (!textContent) return;
    const newComment = {
      id: randomId,
      content: textContent,
      createdAt: '',
      commenter: {
        id: user?.uid,
        email: user?.email,
        name: user?.displayName,
        image: user?.photoURL,
      },
      reactions: [],
      isDelivered: false,
    };
    socket.emit('add-comments', newComment);
    setNoteComments((prev: CommentsProps) => {
      prev.comments.push(newComment);
      return { ...prev };
    });
    // @ts-ignore
    commentInput.current.textContent = '';
    setIsEmpty(true);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLDivElement>) => {
    event.preventDefault();
    document.execCommand(
      'inserttext',
      false,
      event.clipboardData.getData('text/plain')
    );
  };

  const handleInput = (event: React.ChangeEvent<HTMLDivElement>) => {
    // @ts-ignore
    const textLength = event.target.textContent.length;
    if (textLength > 0) setIsEmpty(false);
    if (textLength < 1) setIsEmpty(true);
  };

  return (
    <>
      <div className={styles.comments} ref={commentContainer}>
        <h2>Comments</h2>
        <div className={styles.commenstArea}>
          {noteComments?.comments.map((comment) => (
            <Comment key={comment.id} data={comment} />
          ))}
        </div>
        <form className={styles.form}>
          <div
            contentEditable
            className={styles.textarea + getClassName(isEmpty, styles.empty)}
            placeholder="Say something.."
            onInput={handleInput}
            onKeyDown={handleKeyDown}
            onPaste={handlePaste}
            ref={commentInput}
          />
          <SmallButton
            onClick={handleSubmit}
            className={styles.icon}
            icon={<SendIcon />}
          />
        </form>
      </div>
    </>
  );
};

export default Comments;
