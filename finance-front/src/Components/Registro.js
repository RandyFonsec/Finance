import React, { useState } from 'react';

import styles from './componentStyles.module.css'


import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CustomCard from './CustomCard.js'

import controlador from '../Controller/controlador.js'

function Registro() {

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [pass1, setPass1] = useState('');
  const [pass2, setPass2] = useState('');

  const handleRegis = async() => {
    //Hacer algo con los datos updateUser: async (id,nombre,correo,contrasenna)
    try {
      const response = await controlador.regisUser(nombre,email, pass1);
      
      if (response.status == 200) {
        alert("REGISTRADO");
      } else if (response.status == 204) {
        alert(response.statusText);
      } else alert("ERROR");
    } catch (error) {
      console.error('Error en la función handleRegis:', error);
    }

  }

  return (
    
    <>

    <div className = {styles.registerContainer}>

      <CustomCard >

        <h2>Registrarme: </h2>

        <Form>

          <Form.Group className="mb-3" controlId="11">
            <Form.Label>Nombre:</Form.Label>
            <Form.Control 
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            type="text" 
            placeholder="Nombre" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="2">
            <Form.Label>Correo:</Form.Label>
            <Form.Control 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email" 
            placeholder="correo@example.com" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="3">
            <Form.Label>Contraseña:</Form.Label>
            <Form.Control 
            value={pass1}
            onChange={(e) => setPass1(e.target.value)}
            type="password" 
            placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="4">
            <Form.Label>Repite contraseña:</Form.Label>
            <Form.Control 
            value={pass2}
            onChange={(e) => setPass2(e.target.value)}
            type="password" 
            placeholder="" />
          </Form.Group>

          <Button onClick = {handleRegis} variant="primary">Registrarme</Button>

        </Form>


      </CustomCard>
     
    </div>
    </>
  );
}

export default Registro;