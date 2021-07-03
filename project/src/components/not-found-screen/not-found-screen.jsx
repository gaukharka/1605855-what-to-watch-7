import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoutes} from '../../consts';

function NotFoundScreen() {

  return (
    <section>
      <h1>404. Page not found</h1>
      <Link to={AppRoutes.ROOT}>Вернуться на главную</Link>
    </section>
  );
}

export default NotFoundScreen;
