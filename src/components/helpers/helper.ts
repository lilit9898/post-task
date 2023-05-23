import { useState } from 'react';
import { useAppSelector } from '../../redux/store';
import { IPostsData } from '../../types';

interface IPagination {
  currentPagePosts: IPostsData[];
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export function usePagination():IPagination{
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { posts } = useAppSelector((state) => state.posts);
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPagePosts: IPostsData[] = posts.slice(startIndex, endIndex);
  return [currentPagePosts, setCurrentPage];
}

// let num = 1;
// let pages = [];

// for (let i = 0; i < posts.length / 10; i++) {
//   pages.push(num + i);
// }
