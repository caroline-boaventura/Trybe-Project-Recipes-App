import React from 'react';
import PropTypes from 'prop-types';
import { useHistory as UseHistory } from 'react-router-dom';
import '../pages/index.css';

export default function Header(props) {
  const { title, visibility, headleSearchBar } = props;
  const history = UseHistory();

  const profile = () => {
    history.push('/perfil');
  };

  return (
    <div className="container-header">
      <button
        type="button"
        onClick={ () => profile() }
      >
        <i className="far fa-user" />
      </button>
      <h1 id={ title } data-testid="page-title">{ title }</h1>
      { visibility ? (
        <button
          type="button"
          onClick={ () => headleSearchBar() }
        >
          <i className="fas fa-search" />
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
