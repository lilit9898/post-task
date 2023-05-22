import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { fetchPostsRequest } from '../redux/actions/postAction';

const PostList: React.FC = () => {
  const { posts } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, []);
  console.log(posts);

  return (
    <>
      {posts?.map((post) => {
        return (
          <div>
            <img src="./images/user.png" alt="user" width="40px" />
            <h1>{post.title}</h1>
            <span>{post.body}</span>
          </div>
        );
      })}
    </>
  );
};

export default PostList;
