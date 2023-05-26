export interface IPostsData {
  id: number;
  body: string;
  title: string;
  userId?: number;
}

export interface ICommentsData {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface IComments {
  id: number;
  comments: ICommentsData[];
}

export interface IPostsInitialState {
  posts: IPostsData[];
  loading: boolean;
  error: string | null;
}
export interface ICommentsInitialState {
  comments: { [id: number]: ICommentsData[] };
  loading: boolean;
  error: string | null;
}

export interface IPaginationState {
  currentPage: number;
  data: [];
}
