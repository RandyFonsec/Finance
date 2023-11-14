import React, {useState,useEffect } from 'react';


import TwoLinesChart from './TwoLinesChart.js'
import CustomCard from './CustomCard.js'
import RadioButtons from './RadioButtons.js'
import DatePicker from "react-datepicker";

import controlador from '../Controller/controlador.js'

import "react-datepicker/dist/react-datepicker.css";
import styles from './componentStyles.module.css'


function GasVIng({isPersonal,id}){
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [dataChart1, setChart1] = useState([]);
  const [dataChart2, setChart2] = useState([]);

  useEffect(() => {
    setDataChartIngreso();
    setDataChartGasto();
  }, [isPersonal]); 

  const setDataChartIngreso = async() => {
    
    try {
      const response = await controlador.getIngresosPormes(id,!isPersonal,date1, date2);
   
      if (response.length !== 0) {
          const dataPoints = response.map(item => {
              return { y: item.MontoTotal,label: `Mes ${item.Mes}` };
          });
          setChart1(dataPoints);
          //console.log(dataPoints)
      } else alert("ERROR");
    } catch (error) {
      console.error('Error en la función setDataChartIngreso:', error);
    }

  }

  const setDataChartGasto = async() => {
    
    try {
      const response = await controlador.getGastosPormes(id,!isPersonal,date1, date2);
   
      if (response.length !== 0) {
        const dataPoints = response.map(item => {
            return { y: item.MontoTotal,label: `Mes ${item.Mes}`};
          });
          setChart2(dataPoints);
          //console.log(dataPoints)
      } else alert("ERROR");
    } catch (error) {
      console.error('Error en la función setDataChartGasto:', error);
    }

  }

  const handleDate1 = date => {
    setDate1(date);
    setDataChartIngreso();
    setDataChartGasto();
  };

  const handleDate2 = date => {
    setDate2(date);
    setDataChartIngreso();
    setDataChartGasto();
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

        <TwoLinesChart data1 = {dataChart1} data2 = {dataChart2} />

        </CustomCard>
    </>
  );}

  export default GasVIng;