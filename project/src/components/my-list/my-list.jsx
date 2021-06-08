import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../logo/logo.jsx';
import Footer from '../footer/footer.jsx';
// import {MovieCard} from '../movie-card/movie-card.js';

function MyList() {

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <Link to="/" className="user-block__link">Sign out</Link>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        {/* <MovieCard /> */}
      </section>
      <Footer />
    </div>
  );
}

export default MyList;
