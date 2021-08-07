import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

import useIsMount from '../../Hooks/useIsMount';

import Filter from '../Filter/Filter';

const Search = ({ getMovies }) => {
  const isMount = useIsMount();

  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState('');

  const onChange = (e) => setSearchValue(e.target.value);

  const getFilterValue = (value = '') => {
    setFilterValue(value);
  };

  const onSearch = () => {
    getMovies(searchValue, filterValue);
  };

  useEffect(() => {
    if (isMount) return;

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
