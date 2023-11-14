import React, {useState} from 'react';


import BarChart from './BarChart.js'
import CustomCard from './CustomCard.js'
import RadioButtons from './RadioButtons.js'
import DatePicker from "react-datepicker";

import controlador from '../Controller/controlador.js'

import "react-datepicker/dist/react-datepicker.css";
import styles from './componentStyles.module.css'


function Detalle({isPersonal}){
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());


  const handleGI = (isIngreso) => {
    let msg = isPersonal ? 'Personal: \n' : 'Negocio: \n';
    msg += isIngreso ? 'Tendencia ingreso' : 'Tendencia gasto';
    alert(msg);

  } 

  const handleDate1 = date => {
    setDate1(date);
  };


  return(
  	<>
  <CustomCard>
        <div className={styles.reportHeader}>
        <h3 className="fs-3 fw-bold me-5">Detalle mensual</h3>
        <RadioButtons 
            opt1={'Ingresos'} 
            opt2={'Gastos'} 
            onOptionChange={handleGI}/>
        </div>  

        <hr className="bg-danger border-2 border-top border-dark" />

        <div className="mt-5 text-center mb-5">
        <label htmlFor="date1">{"Mes: "}</label>
        <DatePicker
          id="date1"          
          selected={date1}
          onChange={handleDate1}
          dateFormat="MM/yyyy" // Puedes ajustar el formato según tus necesidades
          scrollableYearDropdown
        />
        </div>




        <BarChart/>  

    </CustomCard>
    </>
  );}

  export default Detalle;