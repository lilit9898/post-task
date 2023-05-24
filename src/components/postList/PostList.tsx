import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
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
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const [currentPagePosts, currentPage, setCurrentPage, pages] =
    usePagination();
  const comments = useAppSelector((state) => state.comments.comments);

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, []);

  const handleClick = (id: number) => {
    setOpen(!open);
    dispatch(fetchCommentsRequest(id));
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
            {}

            <button onClick={() => handleClick(id)}>comments</button>
            {open && id && <Comments />}
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
