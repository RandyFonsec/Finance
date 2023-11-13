import React, { useState } from 'react';



import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';












function Gestionar({categories, addFunction, updateFunction, deleteFunction}) {
  const [name, setName] = useState("");

  const [id, setIdEdit] = useState(-1);
  const [nombre, setNameEdit] = useState("");


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
              placeholder = "Nombre categoría..."
              />
            </Form.Group>

            <Button 
            onClick = {() => {addFunction(name);handleShow()}}
            variant="primary">+</Button>
           

          </Stack>


          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Editar</th>
                <th>Quitar</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.nombre}</td>
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
          <Modal.Title>Editar categoria:</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Stack gap={2} direction="horizontal">

            <Form.Group className="mb-3" controlId="1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control 
              value={nombre}
              onChange={(e) => setNameEdit(e.target.value)}
              type="text" 
              placeholder = "Nombre categoría..."
              />
            </Form.Group>

            <Button 
            onClick = {() => {updateFunction({id,nombre});setNameEdit("");setIdEdit(-1); handleClose()}}
            variant="primary">Guardar</Button>
           

          </Stack>

        </Modal.Body>
        
      </Modal>

    </>
  );
}

export default Gestionar;
