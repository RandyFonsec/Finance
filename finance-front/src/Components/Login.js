import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import { Link } from 'react-router-dom';



import CustomCard from './CustomCard.js'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import styles from './componentStyles.module.css'

function Login() {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    if(username === 'admin' && password === 'admin'){
      const usuario = {
          username : username,
          password : password,
          email : 'email@email.com'
      }
      login(usuario);
    }
    else{
      alert("Credenciales incorrectas");
    }
  };

  return (
    <>
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
