import React, { useState,useEffect } from 'react';
import { useAuth } from '../AuthContext';
import controlador from '../Controller/controlador.js'

import CustomCard from './CustomCard.js'
import Gestionar from './Gestionar.js'
import GestionarImpuestos from './GestionarImpuestos.js'
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CustomDialog from '../Components/CustomDialog.js';



function NegocioConfig({negocio}) {
  const { user } = useAuth();

  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [msg, setMsg] = useState('');
  const showAlert = (title,msg) => {
    setShow(true);
    setTitle(title);
    setMsg(msg);

  }

  let name;

  if(negocio?.nombre)
    name = negocio.nombre;
  else
    name = "Negocio";


  const [nomNegocio, setNomNegocio] = useState(name);

  const [catIngresos, setCatIngresos] = useState([]);
  const [catGastos, setCatGastos] = useState([]);
  
  useEffect(() => {
    cargarCategoriasIngresos();
    cargarCategoriasGastos();
  }, []);

  const cargarCategoriasIngresos = async () => {
    try {
      const response = await controlador.getCategoriasIngresoNegocio(user.id);
   
      if (response.length !== 0) {
        setCatIngresos(response);
      } else alert("ERROR al obtener datos");
    } catch (error) {
      console.error('Error en la función cargarCategoriasIngresos:', error);
    }
  };
  const cargarCategoriasGastos = async () => {
    try {
      const response = await controlador.getCategoriasGastoNegocio(user.id);
   
      if (response.length !== 0) {
        setCatGastos(response);
      } else alert("ERROR al obtener datos");
    } catch (error) {
      console.error('Error en la función cargarCategoriasGastos:', error);
    }
  };

  const handleUpdateNegocio = async() => {
    try {
      const response = await controlador.actualizarNegocio(nomNegocio,user.id);
   
      if (response.status == 200) {
        showAlert("Éxito","Nombre actualizado exitosamente");
      } else alert("ERROR al obtener datos");
    } catch (error) {
      console.error('Error en la función handleUpdateNegocio:', error);
    }
    
  }

  const handleAddCatIngreso = async(nombre) => {
    try {
      const response = await controlador.registrarCategoriaIngresoNegocio(nombre,user.id);
   
      if (response.status == 200) {
        showAlert("Éxito","Categoria agregada exitosamente");
      } else alert("ERROR al obtener datos");
    } catch (error) {
      console.error('Error en la función handleAddCatIngreso:', error);
    }
    
  }

  const handleUpdateCatIngreso = async(categoria) => {
    try {
      const response = await controlador.actualizarCategoriaIngresoNegocio(JSON.stringify(categoria));
   
      if (response.status == 200) {
        showAlert("Éxito","Categoria actualizada exitosamente");
      } else alert("ERROR al obtener datos");
    } catch (error) {
      console.error('Error en la función handleUpdateCatIngreso:', error);
    }
  }

  const handleDeleteCatIngreso = async(id) => {
    try {
      const response = await controlador.eliminarCategoriaIngresoNegocio(JSON.stringify({id}));
   
      if (response.status == 200) {
        showAlert("Éxito","Categoria eliminada exitosamente");
      } else alert("ERROR al obtener datos");
    } catch (error) {
      console.error('Error en la función handleDeleteCatIngreso:', error);
    }
  }



  const handleAddCatGasto = async(nombre) => {
    try {
      const response = await controlador.registrarCategoriaGastoNegocio(nombre,user.id);
   
      if (response.status == 200) {
        showAlert("Éxito","Categoria agregada exitosamente");
      } else alert("ERROR al obtener datos");
    } catch (error) {
      console.error('Error en la función handleAddCatGasto:', error);
    }
  }

  const handleUpdateCatGasto = async(categoria) => {
    try {
      const response = await controlador.actualizarCategoriaGastoNegocio(JSON.stringify(categoria));
   
      if (response.status == 200) {
        showAlert("Éxito","Categoria actualizada exitosamente");
      } else alert("ERROR al obtener datos");
    } catch (error) {
      console.error('Error en la función handleUpdateCatGasto:', error);
    }
  }

  const handleDeleteCatGasto = async(id) => {
    try {
      const response = await controlador.eliminarCategoriaGastoNegocio(JSON.stringify({id}));
   
      if (response.status == 200) {
        showAlert("Éxito","Categoria eliminada exitosamente");
      } else alert("ERROR al obtener datos");
    } catch (error) {
      console.error('Error en la función handleDeleteCatGasto:', error);
    }
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
            onClick ={() =>  handleUpdateNegocio()}
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
      addFunction = {handleAddCatIngreso}
      deleteFunction = {handleDeleteCatIngreso}
      updateFunction = {handleUpdateCatIngreso}
      />

      </CustomCard>


      <CustomCard estilo = {'mt-5'}>
      <h5 className="fs-5 fw-bold">Gestionar categorías de gastos:</h5>
      <hr className="bg-danger border-2 border-top border-dark mb-5" />

      <Gestionar 
      categories = {catGastos} 
      addFunction = {handleAddCatGasto}
      deleteFunction = {handleDeleteCatGasto}
      updateFunction = {handleUpdateCatGasto}
      />  
      </CustomCard>


      <CustomCard estilo = {'mt-5'}>

      <h5 className="fs-5 fw-bold">Gestionar impuestos:</h5>
      <hr className="bg-danger border-2 border-top border-dark mb-5" />

      <GestionarImpuestos 
      categories = {catGastos} 
      addFunction = {handleAddCatGasto}
      deleteFunction = {handleDeleteCatGasto}
      updateFunction = {handleUpdateCatGasto}
      />

      </CustomCard>












      <CustomDialog state = {show} handler = {setShow} title = {title} message = {msg}/>

    </>
  );
}

export default NegocioConfig;