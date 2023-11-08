import React from 'react';

import styles from './componentStyles.module.css'


import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CustomCard from './CustomCard.js'

function Registro() {


  return (
    
    <>

    <div className = {styles.registerContainer}>

      <CustomCard >

        <h2>Registrarme: </h2>

        <Form>

          <Form.Group className="mb-3" controlId="11">
            <Form.Label>Nombre:</Form.Label>
            <Form.Control type="text" placeholder="Mario Martinez" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="2">
            <Form.Label>Correo:</Form.Label>
            <Form.Control type="email" placeholder="email@email.com" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="3">
            <Form.Label>Contraseña:</Form.Label>
            <Form.Control type="password"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="4">
            <Form.Label>Repite contraseña:</Form.Label>
            <Form.Control type="password"/>
          </Form.Group>

          <Button variant="primary">Registrarme</Button>

        </Form>


      </CustomCard>
     
    </div>
    </>
  );
}

export default Registro;