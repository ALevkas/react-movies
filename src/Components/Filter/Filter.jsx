import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Radio, Typography } from 'antd';

const radioes = ['', 'movie', 'series'];

const Filter = (props) => {
  const { getFilterValue } = props;

  const [filterValue, setFilterValue] = useState('');

  const onChange = (e) => {
    setFilterValue(e.target.value);
  };

  useEffect(() => {
    getFilterValue(filterValue);
  }, [filterValue]);

  return (
    <Radio.Group onChange={onChange} value={filterValue}>
      {radioes.map((radio) => (
        <Radio key={radio} value={radio}>
          <Typography.Text type="secondary">{radio ? `${radio} only` : 'all'}</Typography.Text>
        </Radio>
      ))}
    </Radio.Group>
  );
};

Filter.propTypes = {
  getFilterValue: PropTypes.func.isRequired,
};

export default Filter;
