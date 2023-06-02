import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchUserInfoRequest } from '../../../redux/actions/userInfoAction';
import { IUserData } from '../../../types';
import './userInfo.scss';
import { Routers } from '../../enums/routers.enum';

const UserInfo: React.FC = () => {
  const [loading, setLoading] = useState<boolean>();
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setLoading(true);
    if (userId) {
      let timer = setTimeout(() => {
        dispatch(fetchUserInfoRequest(userId));
        setLoading(false);
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [dispatch, userId]);

  const info = useAppSelector((state) => state.userInfo.info);
  if (!userId || !info || !info[+userId]) {
    return <h1>Loading...</h1>;
  }

  const handleOnNavigate = (path: string) => () => {
    navigate(path);
  };
  return (
    <div>
      {loading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="pageConainer">
          <div className="buttonContainer">
            <button className="button" onClick={handleOnNavigate(Routers.HOME)}>
              Back
            </button>
          </div>
          <div className="mContainer">
            <h1> {info[+userId].userInfo.name}</h1>
            <div className="baseInfo">
              <p style={{ fontWeight: 700 }}>Contacts</p>
              email:{info[+userId].userInfo.email}
              <br />
              phone:{info[+userId].userInfo.phone}
            </div>
            <div className="posts">
              <h1>posts</h1>
              {info[+userId].userPosts.map((item: IUserData) => (
                <div key={item.id} className="post">
                  <div className="postItems">
                    <p style={{ fontWeight: 700 }}>title:</p>
                    <p>{item.title}</p>
                  </div>
                  <div className="postItems">
                    <p style={{ fontWeight: 700 }}>text:</p>
                    <p>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
