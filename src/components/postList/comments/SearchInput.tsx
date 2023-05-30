import React, { Dispatch, SetStateAction, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { IPostsData } from '../../../types';

interface ISerchInputProps {
  handleSearch?: () => void;
  searchTerm?: string;
  setSearchTerm?: any;
}

const SearchInput: React.FC<ISerchInputProps> = ({
  handleSearch,
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          variant="outline-secondary"
          id="button-addon1"
          onClick={handleSearch}
        >
          Search
        </Button>
      </InputGroup>
    </>
  );
};

export default SearchInput;
