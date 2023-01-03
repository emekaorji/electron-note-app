import { Dispatch, SetStateAction, useEffect } from 'react';
import { Socket } from 'socket.io-client';
import { CommentsProps } from 'types/data';

const useCommentDelivered = (
  data: CommentsProps['comments'][0],
  socket: Socket,
  setNoteComments: Dispatch<SetStateAction<CommentsProps>>
) => {
  // Update time of comment delivery from the server
  useEffect(() => {
    if (socket == null) return;

    const handler = (time: Date) => {
      setNoteComments((prev: CommentsProps) => {
        const oldComment = prev.comments.find(
          (comment) => comment.id === data?.id
        );
        const oldCommentIndex = prev.comments.findIndex(
          (comment) => comment.id === data?.id
        );
        if (!oldComment || !oldCommentIndex) return { ...prev };
        oldComment.createdAt = time;
        oldComment.isDelivered = true;
        prev.comments.splice(oldCommentIndex, 1, oldComment);
        return { ...prev };
      });
    };

    socket.once(`delivered-${data?.id}`, handler);
  }, [data?.id, setNoteComments, socket]);
};

export default useCommentDelivered;
