import React, { useState } from 'react';
import { useAuth } from '../AuthContext';


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CustomCard from '../Components/CustomCard.js'
import controlador from '../Controller/controlador.js'
import CustomDialog from '../Components/CustomDialog.js';

import styles from './pageStyles.module.css'

function Perfil() {
  //Obtiene el usuario de la sesión
  const { user } = useAuth();

  const [nombre, setNombre] = useState(user.nombre);
  const [email, setEmail] = useState(user.email);
  const [pass1, setPass1] = useState('');
  const [pass2, setPass2] = useState('');

  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [msg, setMsg] = useState('');
  const showAlert = (title,msg) => {
    setShow(true);
    setTitle(title);
    setMsg(msg);

  }



  const handleUpdate = async() => {
    //Hacer algo con los datos updateUser: async (id,nombre,correo,contrasenna)
    try {
      const response = await controlador.updateUser(user.id,nombre,email, pass2);
      
      if (response.status === 200) {
        showAlert("Éxito","Su perfil se ha actualizado correctamente");
      } else if (response.status === 204) {
        alert(response.statusText);
      } else alert("ERROR al obtener los datos");
    } catch (error) {
      console.error('Error en la función handleUpdate:', error);
    }

  }


  return (
    
    <>
    <div className={styles.page}>

    <CustomCard>
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
            placeholder="Nombre" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="2">
            <Form.Label>Correo</Form.Label>
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
     <CustomDialog state = {show} handler = {setShow} title = {title} message = {msg}/>
    </div>
    </>
  );
}

export default Perfil;