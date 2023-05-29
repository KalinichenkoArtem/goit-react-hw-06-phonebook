import React from 'react';

import css from 'components/Filter/Filter.module.css';

import { useDispatch } from 'react-redux';
import { setFilter } from 'components/redux/filterslice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label className={css.filter}>
      Filter
      <input
        className={css.input}
        type="text"
        name="filter"
        onChange={e => dispatch(setFilter(e.target.value))}
      ></input>
    </label>
  );
};

export default Filter;
