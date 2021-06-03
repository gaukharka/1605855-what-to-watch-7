import React from 'react';
import MainPage from '../main-page/main-page.jsx';
import PropTypes from 'prop-types';
function App(props) {
  const {title, genre, releaseDate} = props;

  return (
    <MainPage
      title={title}
      genre={genre}
      releaseDate={releaseDate}
    />
  );
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
};

export default App;
