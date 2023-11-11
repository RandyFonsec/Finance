import React, { useState } from 'react';
import { useAuth } from '../AuthContext';


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CustomCard from '../Components/CustomCard.js'

import styles from './pageStyles.module.css'

function Perfil() {
  //Obtiene el usuario de la sesión
  const { user } = useAuth();

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [pass1, setPass1] = useState('');
  const [pass2, setPass2] = useState('');


  const handleUpdate = () => {
    //Hacer algo con los datos
    alert(pass2);

  }


  return (
    
    <>
    <div className={styles.page}>

    <CustomCard title = "">
      <h3 className="mb-5">Bienvenido, {user.nombre} </h3>
      <div className = {styles.perfilContainer}>
        <h5>Edición de usuario:</h5>
        <Form>

          <Form.Group className="mb-3" controlId="1">
            <Form.Label>Nombre</Form.Label>
            <Form.Control 
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            type="text" 
            placeholder="Manuel Núñez" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="2">
            <Form.Label>Nombre</Form.Label>
            <Form.Control 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email" 
            placeholder="correo@example.com" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control 
            value={pass1}
            onChange={(e) => setPass1(e.target.value)}
            type="password" 
            placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="4">
            <Form.Label>Confirmar contraseña</Form.Label>
            <Form.Control
            value={pass2}
            onChange={(e) => setPass2(e.target.value)} 
            type="password" 
            placeholder="" />
          </Form.Group>

          <Button 
          onClick = {handleUpdate}
          variant="primary">
          Guardar cambios
          </Button>


        </Form>


      </div>

     </CustomCard>
     
    </div>
    </>
  );
}

export default Perfil;