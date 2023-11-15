import React, { useState } from 'react';

import CustomCard from './CustomCard.js'
import Gestionar from './Gestionar.js'
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function NegocioConfig({negocio}) {
  const [nomNegocio, setNomNegocio] = useState(negocio);

  const [catIngresos, setCatIngresos] = useState([{id:1,nombre:"Ing 1"}]);
  const [catGastos, setCatGastos] = useState([{id:1,nombre:"Gast 1"}]);
  


  const handleAdd = (nombre) => {
    
  }

  const handleUpdate = async(categoria) => {
     
  }

  const handleDelete = async(id) => {
     
  }

  return (
    <>
      <Container fluid>
          <Row className="row align-items-center">
            <Col sm={2}>
            <h6 className = "fs-5">Nombre:</h6>
            </Col> 

            <Col sm={6}> 
            <Form.Control
            className="my-3"
            placeholder="Nombre de negocio"
            value={nomNegocio}
            inline
            onChange={(e) => setNomNegocio(e.target.value)}
            aria-label="Marketname"
            aria-describedby="Nombre de negocio"
            />

            </Col>
            <Col sm={3}>

            <Button
            onClick ={() =>  {}}
            variant="primary">Guardar nombre</Button>

            </Col>
          </Row>
          <hr className="bg-danger border-2 border-top border-dark mb-5" />
      </Container>

      <CustomCard>
      <h5 className="fs-5 fw-bold">Gestionar categorías de ingresos:</h5>
      <hr className="bg-danger border-2 border-top border-dark mb-5" />

      <Gestionar 
      categories = {catIngresos} 
      addFunction = {handleAdd}
      deleteFunction = {handleDelete}
      updateFunction = {handleUpdate}
      />

      </CustomCard>


      <CustomCard estilo = {'mt-5'}>
      <h5 className="fs-5 fw-bold">Gestionar categorías de gastos:</h5>
      <hr className="bg-danger border-2 border-top border-dark mb-5" />

      <Gestionar 
      categories = {catGastos} 
      addFunction = {handleAdd}
      deleteFunction = {handleDelete}
      updateFunction = {handleUpdate}
      />

      </CustomCard>


    </>
  );
}

export default NegocioConfig;