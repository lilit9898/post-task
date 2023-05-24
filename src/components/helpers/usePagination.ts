import { useState } from 'react';
import { useAppSelector } from '../../redux/store';
import { IPostsData } from '../../types';

export interface IPagination {
  currentPagePosts: IPostsData[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  pages: number[];
}

export function usePagination(): [
  IPagination['currentPagePosts'],
  IPagination['currentPage'],
  IPagination['setCurrentPage'],
  IPagination['pages'],
] {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { posts } = useAppSelector((state) => state.posts);

  let num = 1;
  let pages = [];

  for (let i = 0; i < posts.length / 10; i++) {
    pages.push(num + i);
  }

  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPagePosts: IPostsData[] = posts.slice(startIndex, endIndex);
  return [currentPagePosts, currentPage, setCurrentPage, pages];
}
