import { Delta } from 'types-quill-delta';

interface Commenter {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly image: string;
}

interface Owner extends Commenter {
  permissions: Array<string>;
}

interface Collaborator extends Commenter {
  permissions: Array<string>;
}

interface Comment {
  readonly id: string;
  content: string;
  commenter: Commenter;
  reactions: Array<string>;
  // replies: Array<Comment>;
  createdAt: number | string | Date;
  isDelivered: boolean;
}

interface Labels {
  name: string;
  color: string;
}

interface DataProps {
  _id: string;
  title: string;
  content: Delta;
  color: string | null;
  labels: Array<Labels>;
  owner: Owner;
  collaborators: Array<Collaborator>;
  createdAt: number | string | Date;
  updatedAt: number | string | Date;
}

interface CommentsProps {
  _id: string;
  comments: Array<Comment>;
}

interface NoteProps extends DataProps, CommentsProps {}

export default DataProps;
export { CommentsProps, NoteProps };
