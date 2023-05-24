import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { ICommentsData } from '../../../types';
import { fetchCommentsRequest } from '../../../redux/actions/commentsAction';

const Comments: React.FC = () => {
  const dispatch = useAppDispatch();

  const comments = useAppSelector((state) => state.comments.comments);
  console.log(comments, 'commentsttttt');

  return (
    <>
      {comments?.map((item) => {
        return <div>{item.email}</div>;
      })}
    </>
  );
};

export default Comments;
