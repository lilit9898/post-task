import { Container } from 'react-bootstrap';
import { IPagination } from '../../hooks/usePagination';
import { default as BPagination } from 'react-bootstrap/Pagination';

type IPaginationProps = Pick<IPagination, 'pages' | 'setCurrentPage'>;

const Pagination: React.FC<IPaginationProps> = ({ pages, setCurrentPage }) => {
  const handleOnSetCurrentPage = (page: number) => () => {
    setCurrentPage(page);
  };

  return (
    <Container>
      <BPagination>
        {pages.map((item) => (
          <div key={item} onClick={handleOnSetCurrentPage(item)}>
            <BPagination.Item>{item}</BPagination.Item>
          </div>
        ))}
      </BPagination>
    </Container>
  );
};

export default Pagination;
