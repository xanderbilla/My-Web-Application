import React from 'react';
import './error.css';

const ErrorPage = () => {
  return (
    <div className="container container-err">
      <h1 className="header">Oops! Something went wrong.</h1>
      <p className="description">
        We couldn't find the page you were looking for.
      </p>
    </div>
  );
};

export default ErrorPage;
