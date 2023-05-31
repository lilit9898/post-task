import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Table } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import './postList.scss';
import Comments from './comments/Comments';
import SearchInput from './comments/SearchInput';
import MainLayout from '../../layouts/MainLayout';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { IPostsData } from '../../../types';
import { fetchPostsRequest } from '../../../redux/actions/postAction';
import { fetchCommentsRequest } from '../../../redux/actions/commentsAction';
import Pagination from '../../containers/Pagination/Pagination';
import usePagination from '../../hooks/usePagination';

const PostList: React.FC = () => {
  const [loadComments, setLoadComments] = useState<{
    open: { [id: string]: boolean };
    loading: { [id: string]: boolean };
  }>({ open: {}, loading: {} });
  const dispatch = useAppDispatch();
  const { posts } = useAppSelector((state) => state.posts);
  const [currentPosts, setCurrentPosts] = useState<IPostsData[]>(posts);

  useEffect(() => {
    setCurrentPosts(posts);
  }, [posts]);

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, []);

  const [currentPagePosts, currentPage, setCurrentPage, pages] = usePagination(currentPosts); // prettier-ignore

  const handleClick = (id: number) => {
    setLoadComments((prevState) => ({
      ...prevState,
      open: { ...prevState.open, [id]: !prevState.open[id] },
      loading: { ...prevState.loading, [id]: !prevState.open[id] },
    }));

    if (!loadComments.open[id]) {
      const timer = setTimeout(() => {
        dispatch(fetchCommentsRequest(id));
        setLoadComments((prevState) => ({
          ...prevState,
          loading: { ...prevState.loading, [id]: false },
        }));
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  };

  const renderUsers = () => {
    return currentPagePosts.map(({ id, title, body }) => (
      <tr key={id}>
        <td>
          <Image src="/images/user.png" width={40} />
        </td>
        <td>{title}</td>
        <td>{body}</td>
        <td>
          <button onClick={() => handleClick(id)}>comments</button>
          {loadComments.loading[id] ? (
            <div>Loading...</div>
          ) : loadComments?.open[id] ? (
            <Comments id={id} />
          ) : null}
        </td>
      </tr>
    ));
  };

  return (
    <MainLayout>
      <Container className="table-container">
        <h1 style={{ padding: '0px 20px 20px 20px ' }}>Post List</h1>
        <SearchInput setCurrentPosts={setCurrentPosts} />
        <Table
          striped
          bordered
          hover
          color="white"
          responsive
          style={{ overflowY: 'auto', height: '700px' }}
        >
          <thead>
            <tr>
              <th>user</th>
              <th>title</th>
              <th>text</th>
              <th>comments</th>
            </tr>
          </thead>
          <tbody>{renderUsers()}</tbody>
        </Table>
        <Pagination setCurrentPage={setCurrentPage} pages={pages} />
      </Container>
    </MainLayout>
  );
};

export default PostList;
