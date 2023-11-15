import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col } from 'react-bootstrap';


import NegocioConfig from './NegocioConfig.js'


import styles from './componentStyles.module.css'



function ModalNegocio({negocio, state, handleState}) {
  const [show, setShow] = useState(state);
  

  const handleClose = () => handleState(false);
  const handleShow = () => handleState(true);

  return (
    <>
      <Modal 
        size = {'lg'} 
        centered
        animation={false} 
        backdrop="static"
        keyboard={false}
        show={show} 
        onHide={handleClose}

        >

        <Modal.Header closeButton >
          <Modal.Title>Configuración negocio</Modal.Title>
        </Modal.Header>

        <Modal.Body style  = {{background:'#DEEBFF'}} className = {styles.modalNegocio}>

          <NegocioConfig negocio = {negocio}/>

        </Modal.Body>
        

      </Modal>
    </>
  );
}

export default ModalNegocio;