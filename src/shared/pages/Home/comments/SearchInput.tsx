import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { IPostsData } from '../../../../types';
import { useAppSelector } from '../../../../redux/store';

interface ISerchInputProps {
  setCurrentPosts: Dispatch<SetStateAction<IPostsData[]>>;
}

const SearchInput: React.FC<ISerchInputProps> = ({ setCurrentPosts }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { posts } = useAppSelector((state) => state.posts);

  const handleSearch = (value: string) => {
    const filteredData = posts.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase()),
    );
    setCurrentPosts(filteredData);
  };

  const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    handleSearch(target.value);
    setSearchTerm(target.value);
  };

  const handleOnClick = () => {
    setSearchTerm('');
    setCurrentPosts(posts);
  };

  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          type="text"
          value={searchTerm}
          onChange={handleOnChange}
        />
        <Button
          variant="outline-secondary"
          id="button-addon1"
          onClick={handleOnClick}
        >
          X
        </Button>
      </InputGroup>
    </>
  );
};

export default SearchInput;
