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
  replies: Array<Comment>;
}

interface Labels {
  name: string;
  color: string;
}

interface DataProps {
  id: string;
  title: string;
  created: number;
  updated: number;
  content: string;
  color: string | null;
  labels: Array<Labels>;
  owner: Owner;
  collaborators: Array<Collaborator>;
  comments: Array<Comment>;
}

export default DataProps;
