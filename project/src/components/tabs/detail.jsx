import React from 'react';
import PropTypes from 'prop-types';

function Detail(props) {
  const {data, title} = props;
  /* eslint-disable no-console */
  console.log(data, title);

  return (
    <p className="film-card__details-item">
      <strong className="film-card__details-name">{title}</strong>
      <span className="film-card__details-value">{data}</span>
    </p>
  );
}

Detail.propTypes = {
  data: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default Detail;
