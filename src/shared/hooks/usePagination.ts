import { useState } from 'react';
import { IPostsData } from '../../types';

export interface IPagination {
  currentPagePosts: IPostsData[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  pages: number[];
}

export default function usePagination(
  currentPosts: IPostsData[],
): [
  IPagination['currentPagePosts'],
  IPagination['currentPage'],
  IPagination['setCurrentPage'],
  IPagination['pages'],
] {
  const [currentPage, setCurrentPage] = useState<number>(1);

  let num = 1;
  let pages = [];

  for (let i = 0; i < currentPosts.length / 10; i++) {
    pages.push(num + i);
  }

  const itemsPerPage = currentPosts.length > 5 ? 5 : currentPosts.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPagePosts: IPostsData[] = currentPosts.slice(
    startIndex,
    endIndex,
  );
  return [currentPagePosts, currentPage, setCurrentPage, pages];
}
