import React from 'react'
import Spinner from "react-bootstrap/Spinner";

function SpinnerLoader({ message = 'Cargando preguntas...' }) {
  return (
    <div className="d-grid w-100">
      <Spinner
        as="span"
        animation="border"
        role="status"
        aria-hidden="true"
        style={{margin: '100px auto', height: '100px', width: '100px', fontSize: '2rem'}}
      />
      <p className="text-center mb-0 fs-5">{ message }</p>
    </div>
  )
}

export default SpinnerLoader