export interface IPostsData {
  id: number;
  body: string;
  title: string;
  userId: number;
}

export interface IInitialState {
  posts: IPostsData[];
  loading: boolean;
  error: string | null;
}
