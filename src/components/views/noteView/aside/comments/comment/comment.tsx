import CheckIcon from 'components/reusables/icons/check';
import AvatarImage from 'components/reusables/images/avatarImage/avatarImage';
import useCommentDelivered from 'components/views/noteView/shared/hooks/useCommentDelivered';
import useNoteViewContext from 'components/views/noteView/shared/hooks/useNoteViewContext';
import getClassName from 'functions/getClassName';
import getFormattedDate from 'functions/getFormattedDate';
import getFormattedTime from 'functions/getFormattedTime';
import useAuthContext from 'hooks/context/useAuthContext';
import { Dispatch, memo, SetStateAction } from 'react';
import { CommentsProps } from 'types/data';
import styles from './comment.module.css';

const Comment = memo(({ data }: { data: CommentsProps['comments'][0] }) => {
  // @ts-ignore
  const { user, socket } = useAuthContext();
  // @ts-ignore
  const {
    setNoteComments,
  }: { setNoteComments: Dispatch<SetStateAction<CommentsProps>> } =
    useNoteViewContext();

  useCommentDelivered(data, socket, setNoteComments);

  const isIncoming = user.uid !== data.commenter.id;

  return (
    <>
      <div
        className={styles.comment + getClassName(isIncoming, styles.incoming)}
      >
        <div className={styles.layer1}>
          <AvatarImage
            src={data.commenter.image}
            alt={data.commenter.name}
            className={styles.avatarImage}
          />
          {/* <div className={styles.name}>{data.commenter.name}</div> */}
        </div>
        <div className={styles.content}>{data.content}</div>
        <div className={styles.layer3}>
          <div className={styles.date}>
            {data.createdAt && (
              <>
                {getFormattedTime(data.createdAt, 'h:mm P')} •{' '}
                {getFormattedDate(data.createdAt, 'Mmm Dth, YYYY')}
              </>
            )}
          </div>
          {!isIncoming && (
            <div
              className={
                styles.status + getClassName(data.isDelivered, styles.delivered)
              }
            >
              <CheckIcon />
            </div>
          )}
        </div>
      </div>
    </>
  );
});

export default Comment;
