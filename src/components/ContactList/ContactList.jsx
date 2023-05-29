import React from 'react';
import css from 'components/ContactList/ContactList.module.css';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'components/redux/slice';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return name.toLowerCase().includes(filter.toLowerCase()) ? (
    <ul className={css.list}>
      <li key={id} className={css.item}>
        <div className={css.thumb}>
          <p className={css.itemChild}>{name}</p>
          <p className={css.itemChild}>{number}</p>
        </div>
        <button
          className={css.itemButton}
          id={id}
          type="button"
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button>
      </li>
    </ul>
  ) : null;
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
