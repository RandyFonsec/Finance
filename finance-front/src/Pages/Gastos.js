import React, {useState} from 'react';

import CustomCard from '../Components/CustomCard.js'
import Registrar from '../Components/Registrar.js'
import Gestionar from '../Components/Gestionar.js'
import PieChart from '../Components/PieChart.js';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import styles from './pageStyles.module.css'


function Gastos() {
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());

  const handleDate1 = date => {
    setDate1(date);
  };

  const handleDate2 = date => {
    setDate2(date);
  };

  const handleGasto = (gasto) => {
     alert(JSON.stringify(gasto));
  }

  const handleAdd = (nombre) => {
     alert(nombre);
  }

  const handleUpdate = (categoria) => {
     alert(JSON.stringify(categoria));
  }

  const handleDelete = (id) => {
     alert(id);
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
          dateFormat="dd/MM/yyyy" // Puedes ajustar el formato según tus necesidades
          scrollableYearDropdown
        />
        <label className = "ms-4" htmlFor="date1">{"Hasta: "}</label>
        <DatePicker
          id="date2"

          selected={date2}
          onChange={handleDate2}
          dateFormat="dd/MM/yyyy" // Puedes ajustar el formato según tus necesidades
          scrollableYearDropdown
      />
      </div>

      {/* TODO: Proximamente pasar lista*/}
      <div className="mt-5 pt-5">
        <PieChart title = {""}/>
      </div>

    </CustomCard>

    <CustomCard title = "Registrar gasto:">

      <Registrar categories = {[{value:1, label:"Cat 1"},{value:2, label:"Cat 2"}]} handleSubmit = {handleGasto}/>

    </CustomCard>

    <CustomCard title = "Gestionar categorías:">

      <Gestionar 
      categories = {[{id:1, nombre:"Cat 1"},{id:2, nombre:"Cat 2"}]} 
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