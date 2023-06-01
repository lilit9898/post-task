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

export interface IUserData {
  [x: string]: any;
  userId: string;
  id: number;
  title: string;
  body: string;
}
export interface IUserInfo {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {};
  phone: string;
  website: string;
  compamy: {};
}
export interface IUser {
  userPosts: IUserData;
  userId: string;
  userInfo: IUserInfo;
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

export interface IUserInitialState {
  info: IUserData[];
  loading: boolean;
  error: string | null;
}

export interface IPaginationState {
  currentPage: number;
  data: [];
}
