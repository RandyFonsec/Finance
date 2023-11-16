import React, { useState } from 'react';



import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';












function GestionarImpuestos({categories, addFunction, updateFunction, deleteFunction}) {
  const [name, setName] = useState("");

  const [id, setIdEdit] = useState(-1);
  const [nombre, setNameEdit] = useState("");
  const [tasa, setTasa] = useState(-1);


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (

    <>
      <Container>
        <Stack gap={2} className="col-md-5 mx-auto">

          <Stack gap={2} direction="horizontal">

            <Form.Group className="mb-3" controlId="1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control 
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text" 
              placeholder = "Nombre impuesto..."
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="1">
              <Form.Label>Tasa</Form.Label>
              <Form.Control 
              min={0}
              onChange={(e) => setTasa(e.target.value)}
              type="number" 
              placeholder = "Tasa impuesto..."
              />
            </Form.Group>

            <Button 
            onClick = {() => {addFunction(name)}}
            variant="primary">+</Button>
           

          </Stack>


          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Tasa</th>
                <th>Editar</th>
                <th>Quitar</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.nombre}</td>
                  <td>{item.tasa}</td>
                  <td>
                    <Button onClick={() => {setIdEdit(item.id); setNameEdit(item.nombre); handleShow();} }  variant = "primary">Editar</Button>
                  </td>
                  <td>
                    <Button onClick={() => deleteFunction(item.id)}  variant = "danger">Quitar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>


        </Stack>
      </Container>




      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar impuesto:</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Stack gap={2} direction="horizontal">

            <Form.Group className="mb-3" controlId="1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control 
              value={nombre}
              onChange={(e) => setNameEdit(e.target.value)}
              type="text" 
              placeholder = "Nombre impuesto..."
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="1">
              <Form.Label>Tasa</Form.Label>
              <Form.Control 
              min={0}
              onChange={(e) => setTasa(e.target.value)}
              type="number" 
              placeholder = "Tasa impuesto..."
              />
            </Form.Group>

            <Button 
            onClick = {() => {updateFunction({id,nombre});setTasa(-1);setNameEdit("");setIdEdit(-1);handleClose()}}
            variant="primary">Guardar</Button>
           

          </Stack>

        </Modal.Body>
        
      </Modal>

    </>
  );
}

export default GestionarImpuestos;
