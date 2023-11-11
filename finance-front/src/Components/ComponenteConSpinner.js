import React from 'react';
import { Spinner } from 'react-bootstrap';

function ComponenteConSpinner() {
  return (
    <div className="text-center">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Cargando...</span>
      </Spinner>
    </div>
  );
}

export default ComponenteConSpinner;
