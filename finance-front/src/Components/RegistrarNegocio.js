import React, {useState} from 'react';
import { useAuth } from '../AuthContext';

import RadioButtons from './RadioButtons.js'

import DatePicker from "react-datepicker";
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


import "react-datepicker/dist/react-datepicker.css";


function RegistrarNegocio({ingCat, gasCat, handleSubmit}) {

  /*Recibe ambas listas de categorias y funcion para subir*/
  const { user } = useAuth();
  const [id_usuario,setId]   = useState(user.id)


  const [categories,setCategories]   = useState(ingCat)


  const [isIngreso,setIsIngreso]   = useState(true);


  const [fecha, setDate] = useState(new Date());
  const [monto, setMonto] = useState(0);
  const [titulo, setTitulo] = useState("");
  const [id_categoria, setCategoria] = useState(-1);
  const [descripcion, setDescripcion] = useState("");

  const handleButton = () => {
      handleSubmit(isIngreso,{id_usuario,fecha,monto,titulo,id_categoria,descripcion});
      setDate(new Date());
      setMonto(0);
      setTitulo("");
      setCategoria("");
      setDescripcion("");
  }

  const handleDate = fecha => {
    setDate(fecha);
  };

  const handleGI = (value) => {
    //Categorias de ingresos o de gastos
    if(value)
      setCategories(ingCat)
    else
      setCategories(gasCat)

    setIsIngreso(value);
  } 

  return (
    
    <>
    <Container>
       
      <Row className = "my-3">
        <Col xs={2}>
        </Col>
        <Col>
        <RadioButtons 
              opt1={'Ingresos'} 
              opt2={'Gastos'} 
              onOptionChange={handleGI}/>
        </Col>
      </Row>

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
              <option value="" >
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

export default RegistrarNegocio;