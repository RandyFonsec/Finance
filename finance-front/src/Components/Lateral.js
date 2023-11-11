import { useState } from 'react';
import { Link } from 'react-router-dom';


import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';



import Icon from './Icon.js'

import styles from './componentStyles.module.css'





function Lateral() {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(1);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (option) => {
    setSelected(option)
  };

  


  return (
    
    <>
    <nav className={styles.nav}>
      
      <Button className = "mt-5 fs-5" onClick={handleShow}>
        ☰
      </Button>

     <Container style = {{marginTop : '15vh', marginLeft:'1vw',  marginRight:'1vw'}}>
     


          <Link to="perfil">
            <Icon path="user.svg" isActive={selected === 1} onClick={() => handleChange(1)} />
          </Link>
          <Link to="ingresos">
            <Icon path="ingreso.svg" isActive={selected === 2} onClick={() => handleChange(2)} />
          </Link>
          <Link to="gastos">
            <Icon path="gasto.svg" isActive={selected === 3} onClick={() => handleChange(3)} />
          </Link>
          <Link to="negocio">
            <Icon path="store.svg" isActive={selected === 4} onClick={() => handleChange(4)} />
          </Link>
          <Link to="reportes">
            <Icon path="bar.svg" isActive={selected === 5} onClick={() => handleChange(5)} />
          </Link>


    </Container>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="mt-5 fs-3">Menu de opciones</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>


        <ListGroup>

          <Link to="perfil"> 
          <ListGroup.Item action className="my-3"
           onClick={() => {handleChange(1);handleClose()}} >
           Mi Perfil
          </ListGroup.Item>
          </Link>
          
      
          <Link to="ingresos"> 
          <ListGroup.Item action className="my-3"
           onClick={() => {handleChange(2);handleClose()}} >
           Ingresos
          </ListGroup.Item>
          </Link>

          <Link to="gastos">
          <ListGroup.Item action className="my-3"
           onClick={() => {handleChange(3);handleClose()}} >
            Gastos
          </ListGroup.Item>
          </Link>

          <Link to="negocio">
          <ListGroup.Item action className="my-3"
           onClick={() => {handleChange(4);handleClose()}} >
            Mi negocio
          </ListGroup.Item>
          </Link>

          <Link to="reportes">
          <ListGroup.Item action className="my-3"
           onClick={() => {handleChange(5);handleClose()}} >
            Reportes
          </ListGroup.Item>
          </Link>


        </ListGroup>




          

          

        </Offcanvas.Body>
      </Offcanvas>
     


    </nav>
    </>
  );
}

export default Lateral;