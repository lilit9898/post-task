import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { fetchPostsRequest } from '../../redux/actions/postAction';
import Container from 'react-bootstrap/Container';
import { Table } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';
import './postList.scss';
import { usePagination } from '../helpers/helper';
import { IPostsData } from '../../types';

const PostList: React.FC = () => {
  const { posts } = useAppSelector((state) => state.posts);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, []);
  console.log(posts);
  const [currentPagePosts, setCurrentPage] = usePagination();

  const renderUsers = () => {
    return (currentPagePosts as IPostsData[]).map(({ id, title, body }) => {
      return (
        <tr key={id}>
          <td>
            <Image src="/images/user.png" width={40} />
          </td>
          <td>{title}</td>
          <td>{body}</td>
          <td>comments</td>
        </tr>
      );
    });
  };
  let num = 1;
  let pages = [];

  for (let i = 0; i < posts.length / 10; i++) {
    pages.push(num + i);
  }

  return (
    <Container className="table-container">
      <Table striped bordered hover color="white">
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
      <Pagination>
        {pages.map((item) => {
          return (
            <div onClick={() => setCurrentPage<>(item)}>
              <Pagination.Item>{item}</Pagination.Item>
            </div>
          );
        })}
      </Pagination>
    </Container>
  );
};

export default PostList;
