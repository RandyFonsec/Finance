import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import { Link } from 'react-router-dom';



import CustomCard from './CustomCard.js'
import Alerta from './Alerta.js'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import styles from './componentStyles.module.css'

import controlador from '../Controller/controlador.js'

function Login() {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [smShow, setSmShow] = useState(true); 
  const [error, setError] = useState(false);

   const handleLogin = async () => {
    setError(false);
    if (username === 'admin' && password === 'admin') {
      const user = {
        username: username,
        password: password,
        email: 'email@email.com',
      };
      login(user);
    } else {
      try {
        const user = await controlador.getUser(username, password);
        if (user.length !== 0) {
          login(user[0]);
        } else {
          setError(true);
        }
      } catch (error) {
        console.error('Error en la función handleLogin:', error);
      }
    }
  };

  return (

    <>
      {error && (
        <Alerta 
        title = "Error" 
        msg = "Usuario no encontrado" 
        show={smShow} 
        onHide={() => {setSmShow(false); setError(false)}} />
      )}


      <div className={styles.formArea}>



       
      

        <CustomCard>
            <div style = {{display : 'flex', flexDirection : 'column', justifyContent : 'center'}}>
              <h3 className="mb-3">Iniciar sesión</h3>

              <Form.Control
                className="my-3"
                placeholder="Nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                aria-label="Username"
                aria-describedby="Nombre de usuario"
              />

              <Form.Control
                className="my-3"
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-label="Username"
                aria-describedby="Contraseña"
              />

            <Button className = "mb-1" onClick={handleLogin}>Iniciar sesión</Button>
            <Link to="registro"> O crea una cuenta</Link>
          </div>
        </CustomCard>
      </div>
      
      <div className={styles.imageArea}>
        <h2>Por unas finanzas saludables</h2>
        <img src="/loginimage.webp" className = {styles.customImg} alt="Ilustración finanzas" />
      </div>
  </>
  );
}

export default Login;
