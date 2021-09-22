import React from 'react';
import PropTypes from 'prop-types';
import { useHistory as UseHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header(props) {
  const { title, visibility, headleSearchBar } = props;
  const history = UseHistory();

  const profile = () => {
    console.log(history);
    history.push('/perfil');
  };

  return (
    <div>
      <button
        type="button"
        onClick={ () => profile() }
      >
        <img data-testid="profile-top-btn" src={ profileIcon } alt="profile-icon" />
      </button>
      <h1 id={ title } data-testid="page-title">{ title }</h1>
      { visibility ? (
        <button
          type="button"
          onClick={ () => headleSearchBar() }
        >
          <img data-testid="search-top-btn" src={ searchIcon } alt="search-icon" />
        </button>
      ) : null }
    </div>
  );
}

Header.propTypes = ({
  title: PropTypes.string.isRequired,
  visibility: PropTypes.bool.isRequired,
  headleSearchBar: PropTypes.func.isRequired,
});
