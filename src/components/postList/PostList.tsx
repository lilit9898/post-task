import { useEffect, useState } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store';
import { fetchPostsRequest } from '../../redux/actions/postAction';
import Container from 'react-bootstrap/Container';
import { Table } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import './postList.scss';
import { usePagination } from '../helpers/usePagination';
import { IPostsData } from '../../types';
import PaginationC from '../../shared/Pagination';
import { fetchCommentsRequest } from '../../redux/actions/commentsAction';
import Comments from './comments/Comments';
import SearchInput from './comments/SearchInput';

const PostList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loadComments, setLoadComments] = useState<{
    open: { [id: string]: boolean };
    loading: { [id: string]: boolean };
  }>({ open: {}, loading: {} });
  const dispatch = useAppDispatch();

  const [currentPagePosts, currentPage, setCurrentPage, pages] =
    usePagination();

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, []);

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
  const handleSearch = () => {
    const filteredData = currentPagePosts.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    return filteredData;
    // Update your component state or perform any other logic with the filtered data
  };

  const renderUsers = () => {
    return handleSearch().length <= 0
      ? currentPagePosts.map(({ id, title, body }) => (
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
        ))
      : handleSearch().map(({ id, title, body }) => (
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
    <>
      <Container className="table-container">
        <h1 style={{ padding: '0px 20px 20px 20px ' }}>Post List</h1>
        <SearchInput
          handleSearch={handleSearch}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
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
        <PaginationC setCurrentPage={setCurrentPage} pages={pages} />
      </Container>
    </>
  );
};

export default PostList;
