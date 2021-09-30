import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from '../components/index';

export default function User() {
  function eraseLocalStorage() {
    localStorage.clear();
  }

  const { email } = JSON.parse(localStorage.getItem('user'));
  return (
    <div>
      <Header title="Perfil" visibility={ false } />
      <h1 data-testid="profile-email">{email}</h1>
      <Link
        to="/receitas-feitas"
      >
        <button
          type="button"
          data-testid="profile-done-btn"
        >
          Receitas Feitas

        </button>
      </Link>
      <Link
        to="/receitas-favoritas"
      >
        <button
          type="button"
          data-testid="profile-favorite-btn"
        >
          Receitas Favoritas

        </button>
      </Link>
      <Link
        to="/"
      >
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ () => eraseLocalStorage() }
        >
          Sair

        </button>
      </Link>
      <Footer />
    </div>
  );
}
