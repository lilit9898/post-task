import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { useParams } from 'react-router-dom';
import { fetchUserInfoRequest } from '../../../redux/actions/userInfoAction';
import { IUserData, IUserInfo } from '../../../types';

const UserInfo: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserInfoRequest(userId));
    }
  }, [dispatch, userId]);

  const info = useAppSelector((state) => state.userInfo.info);
  console.log(info, 'info');
  if (!userId || !info[+userId]) {
    return null;
  }

  return (
    <div>
      <h1> User</h1>
      <>
        <div>
          <div>{info[+userId].userInfo.name}</div>
          <div>{info[+userId].userInfo.phone}</div>
        </div>
      </>
      {info[+userId].userPosts.map((item: IUserData) => (
        <div key={item.id}>
          <div>{item.title}</div>
          <div>{item.body}</div>
        </div>
      ))}
    </div>
  );
};

export default UserInfo;
