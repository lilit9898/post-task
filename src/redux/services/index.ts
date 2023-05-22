import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../config/axios';
import { USERS_LIST_URL } from '../../constants';
import { IPostsData } from '../../types';

export const getPosts = createAsyncThunk<IPostsData[]>(
  'getData',
  async () => (await instance.get(USERS_LIST_URL)).data,
);
