import { useEffect, useState } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store';
import { fetchPostsRequest } from '../../redux/actions/postAction';
import Container from 'react-bootstrap/Container';
import { Badge, Table } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import './postList.scss';
import { usePagination } from '../helpers/usePagination';
import { IPostsData } from '../../types';
import PaginationC from '../../shared/Pagination';
import { fetchCommentsRequest } from '../../redux/actions/commentsAction';
import Comments from './comments/Comments';

const PostList: React.FC = () => {
  const [open, setOpen] = useState<{ [id: string]: boolean }>({});
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  // const loading = useAppSelector((state: RootState) => state.comments.loading);

  const [currentPagePosts, currentPage, setCurrentPage, pages] =
    usePagination();

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, []);

  const handleClick = (id: number) => {
    setOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
    if (!open[id] || Object.keys(open).length === 0) {
      setLoading(true);
      const timer = setTimeout(() => {
        dispatch(fetchCommentsRequest(id));
        setLoading(false);
        // {
        //   (open[id] || Object.keys(open).length === 0) &&
        //     dispatch(fetchCommentsRequest(id)),
        //     setLoading(false);
        // }
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  };

  const renderUsers = () => {
    return (currentPagePosts as IPostsData[]).map(({ id, title, body }) => {
      return (
        <tr key={id}>
          <td>
            <Image src="/images/user.png" width={40} />
          </td>
          <td>{title}</td>
          <td>{body}</td>
          <td>
            <button onClick={() => handleClick(id)}>comments</button>
            {loading ? (
              <div>Loading...</div>
            ) : open[id] ? (
              <Comments id={id} />
            ) : null}
          </td>
        </tr>
      );
    });
  };

  return (
    <Container className="table-container">
      <h1 style={{ padding: '0px 20px 20px 20px ' }}>Post List</h1>
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
  );
};

export default PostList;
