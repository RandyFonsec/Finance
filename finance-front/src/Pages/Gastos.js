import React, {useState,useEffect} from 'react';
import { useAuth } from '../AuthContext';

import CustomCard from '../Components/CustomCard.js'
import Registrar from '../Components/Registrar.js'
import Gestionar from '../Components/Gestionar.js'
import PieChart from '../Components/PieChart.js';
import DatePicker from "react-datepicker";

import controlador from '../Controller/controlador.js'

import "react-datepicker/dist/react-datepicker.css";
import styles from './pageStyles.module.css'


function Gastos() {
  const { user } = useAuth();
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [dataPie, setPie] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    cargarCategorias();
  }, []);

  const cargarCategorias = async () => {
    try {
      const response = await controlador.getCategoriasGasto(user.id);
   
      if (response.length !== 0) {
        setCategorias(response);
      } else alert("ERROR");
    } catch (error) {
      console.error('Error en la función cargarCategorias:', error);
    }
  };

  const setDataPie = async() => {
    
    try {
      const response = await controlador.getGastosRecientes(user.id,date1, date2);
   
      if (response.length !== 0) {
          const sumaTotal = response.reduce((total, item) => total + item.MontoTotal, 0);
          const dataPoints = response.map(item => {
            let porcentaje = (item.MontoTotal / sumaTotal) * 100;
            porcentaje = sumaTotal === 0 ? 100 : porcentaje;
              return { y: porcentaje, label: item.Categoria };
          });
          setPie(dataPoints);
          //console.log(dataPoints)
      } else alert("ERROR");
    } catch (error) {
      console.error('Error en la función setDataPie:', error);
    }

  }

  const handleDate1 = date => {
    setDate1(date);
  };

  const handleDate2 = date => {
    setDate2(date);
    setDataPie();
  };


  const handleGasto = async(gasto) => {
    try {
     const response = await controlador.registrarGasto(JSON.stringify(gasto));
  
     if (response.status == 200) {
       alert("LISTO");
     } else alert("ERROR");
   } catch (error) {
     console.error('Error en la función handleGasto:', error);
   }
 }

 const handleAdd = async(nombre) => {
   try {
     const response = await controlador.registrarCategoriaGasto(nombre,user.id);
  
     if (response.status == 200) {
       alert("LISTO");
     } else alert("ERROR");
   } catch (error) {
     console.error('Error en la función handleGasto:', error);
   }
 }

 const handleUpdate = async(categoria) => {
    try {
     const response = await controlador.actualizarCategoriaGasto(JSON.stringify(categoria));
  
     if (response.status == 200) {
       alert("LISTO");
     } else alert("ERROR");
   } catch (error) {
     console.error('Error en la función handleGasto:', error);
   }
 }

 const handleDelete = async(id) => {
    try {
     const response = await controlador.eliminarCategoriaGasto(JSON.stringify({id}));
  
     if (response.status == 200) {
       alert("LISTO");
     } else alert("ERROR");
   } catch (error) {
     console.error('Error en la función handleGasto:', error);
   }
 }
  return (
    
    <>

    <div className={styles.page}>

    <CustomCard title = "Gastos recientes:">
      <div className="mt-3 text-center">
        <label htmlFor="date1">{"Desde: "}</label>
        <DatePicker
          id="date1"
          
          selected={date1}
          onChange={handleDate1}
          dateFormat="yyyy/MM/dd" // Puedes ajustar el formato según tus necesidades
          scrollableYearDropdown
        />
        <label className = "ms-4" htmlFor="date1">{"Hasta: "}</label>
        <DatePicker
          id="date2"

          selected={date2}
          onChange={handleDate2}
          dateFormat="yyyy/MM/dd" // Puedes ajustar el formato según tus necesidades
          scrollableYearDropdown
      />
      </div>

      {/* TODO: Proximamente pasar lista*/}
      <div className="mt-5 pt-5">
        <PieChart title = {""} dataPie = {dataPie}/>
      </div>

    </CustomCard>

    <CustomCard title = "Registrar gasto:">

      <Registrar categories = {categorias} handleSubmit = {handleGasto}/>

    </CustomCard>

    <CustomCard title = "Gestionar categorías:">

      <Gestionar 
      categories = {categorias} 
      addFunction = {handleAdd}
      deleteFunction = {handleDelete}
      updateFunction = {handleUpdate}
      />

    </CustomCard>
     
    </div>
    </>
  );
}

export default Gastos;