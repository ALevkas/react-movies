import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

import Filter from '../Filter/Filter';

const Search = ({ getMovies }) => {
  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState('');

  const onChange = (e) => setSearchValue(e.target.value);

  const getFilterValue = (value = 'all') => {
    setFilterValue(value);
  };

  const onSearch = () => {
    getMovies(searchValue, filterValue);
  };

  useEffect(() => {
    onSearch();
  }, [filterValue]);

  return (
    <>
      <Input.Search
        placeholder="input search movies"
        allowClear
        enterButton="Search"
        size="large"
        value={searchValue}
        onChange={onChange}
        onSearch={onSearch}
      />

      <Filter getFilterValue={getFilterValue} />
    </>
  );
};

Search.propTypes = {
  getMovies: PropTypes.func.isRequired,
};

export default Search;
