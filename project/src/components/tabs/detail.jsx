import React from 'react';
import PropTypes from 'prop-types';

function Detail(props) {
  const {data, title} = props;

  return (
    <p className="film-card__details-item">
      <strong className="film-card__details-name">{title}</strong>
      <span className="film-card__details-value">{data}</span>
    </p>
  );
}

Detail.propTypes = {
  data: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
};

export default Detail;
