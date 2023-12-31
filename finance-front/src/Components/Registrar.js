import React, {useState} from 'react';
import { useAuth } from '../AuthContext';

import DatePicker from "react-datepicker";
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


import "react-datepicker/dist/react-datepicker.css";


function Registrar({categories, handleSubmit}) {
  /*Recibe categorias y funcion para subir*/
  const { user } = useAuth();
  const [id_usuario,setId]   = useState(user.id)

  const [fecha, setDate] = useState(new Date());
  const [monto, setMonto] = useState(0);
  const [titulo, setTitulo] = useState("");
  const [id_categoria, setCategoria] = useState(-1);
  const [descripcion, setDescripcion] = useState("");

  const handleButton = () => {
      handleSubmit({id_usuario,fecha,monto,titulo,id_categoria,descripcion});
      setDate(new Date());
      setMonto(0);
      setTitulo("");
      setCategoria("");
      setDescripcion("");
  }

  const handleDate = fecha => {
    setDate(fecha);
  };

  return (
    
    <>
    <Container>
      <Row>
        <Col>
          <Stack gap={2} className="col-md-5 mx-auto">

            <Form.Label>Fecha</Form.Label>
            <DatePicker
              selected={fecha}
              onChange={handleDate}
              dateFormat="yyyy/MM/dd" // Puedes ajustar el formato según tus necesidades
              scrollableYearDropdown
            />


          <Form.Group className="mb-3" controlId="1">
            <Form.Label>Monto</Form.Label>
            <Form.Control 
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            type="number" 
            placeholder="1000" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="2">
            <Form.Label>Título</Form.Label>
            <Form.Control 
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            type="text" 
            />
          </Form.Group>


          </Stack>
        </Col>
        <Col>

           <Stack gap={2} className="col-md-5 mx-auto">

           <Form.Label>Categoria</Form.Label>
           <Form.Select
              onChange={(e) => setCategoria(e.target.value)}
              defaultValue=""
            >
              <option value="" disabled>
              Seleccione una categoría
              </option>
              {categories.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.nombre}
                </option>
              ))}
            </Form.Select>

            <Form.Group className="mb-3" controlId="3">
              <Form.Label>Descripción: </Form.Label>
              <Form.Control as="textarea" rows={3} 
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)} />
            </Form.Group>


            <Button 
            onClick = {handleButton}
            variant="primary">Agregar</Button>
           </Stack>

        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Registrar;