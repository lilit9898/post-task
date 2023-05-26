import React from 'react';
import { RootState, useAppSelector } from '../../../redux/store';

const Comments: React.FC<{ id: number }> = ({ id }) => {
  const comments = useAppSelector(
    (state: RootState) => state.comments.comments,
  );

  return (
    <>
      {comments[id]?.map((item) => {
        return (
          <div key={item.id} style={{ padding: 10 }}>
            <div>
              <p style={{ fontSize: 15, fontWeight: 700, margin: 0 }}>user</p>
              {item.email}
            </div>
            <div>
              <p style={{ fontSize: 15, fontWeight: 700, margin: 0 }}>
                comment
              </p>
              {item.body}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Comments;
