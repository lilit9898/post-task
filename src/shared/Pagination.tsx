import { Container } from 'react-bootstrap';
import {
  IPagination,
  usePagination,
} from '../components/helpers/usePagination';
import Pagination from 'react-bootstrap/Pagination';

type IPaginationProps = Pick<IPagination, 'pages' | 'setCurrentPage'>;

const PaginationC: React.FC<IPaginationProps> = ({ pages, setCurrentPage }) => {
  const handleOnSetCurrentPage = (page: number) => () => {
    setCurrentPage(page);
  };

  return (
    <Container>
      <Pagination>
        {pages.map((item) => (
          <div key={item} onClick={handleOnSetCurrentPage(item)}>
            <Pagination.Item>{item}</Pagination.Item>
          </div>
        ))}
      </Pagination>
    </Container>
  );
};

export default PaginationC;
