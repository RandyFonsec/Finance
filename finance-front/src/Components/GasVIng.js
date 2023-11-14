import React, {useState} from 'react';


import TwoLinesChart from './TwoLinesChart.js'
import CustomCard from './CustomCard.js'
import RadioButtons from './RadioButtons.js'
import DatePicker from "react-datepicker";

import controlador from '../Controller/controlador.js'

import "react-datepicker/dist/react-datepicker.css";
import styles from './componentStyles.module.css'


function GasVIng({isPersonal}){
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());


  const handleDate1 = date => {
    setDate1(date);
  };

  const handleDate2 = date => {
    setDate2(date);
  };

  return(
  	<>
	   <CustomCard>
        <div className={styles.reportHeader}>
        <h3 className="fs-3 fw-bold me-5">Gasto vs Ingreso</h3> 
        </div> 

        <hr className="bg-danger border-2 border-top border-dark" />

        <div className="mt-5 text-center mb-5">
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

        <TwoLinesChart/>

        </CustomCard>
    </>
  );}

  export default GasVIng;