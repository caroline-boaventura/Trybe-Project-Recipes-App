import React from 'react';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header(props) {
  const { title } = props;
  return (
    <div>
      <button
        type="button"
        data-testid="profile-top-btn"
      >
        <img src={ profileIcon } alt="profile-icon" />
      </button>
      <h1 data-testid="page-title">{ title }</h1>
      <button
        type="button"
        data-testid="search-top-btn"
      >
        <img src={ searchIcon } alt="search-icon" />
      </button>
    </div>
  );
}

Header.propTypes = ({
  title: PropTypes.string.isRequired,
});
