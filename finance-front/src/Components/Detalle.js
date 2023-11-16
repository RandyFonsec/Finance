import React, {useState,useEffect} from 'react';


import BarChart from './BarChart.js'
import CustomCard from './CustomCard.js'
import RadioButtons from './RadioButtons.js'
import DatePicker from "react-datepicker";

import controlador from '../Controller/controlador.js'

import "react-datepicker/dist/react-datepicker.css";
import styles from './componentStyles.module.css'


function Detalle({isPersonal,id}){
  const [date1, setDate1] = useState(new Date());
  const [dataChart, setChart] = useState([]);
  const [es_ingreso, setIngreso] = useState(true);

  useEffect(() => {
    if(es_ingreso)setDataChartIngreso()
    else setDataChartGasto()
  }, [isPersonal]); 


  const setDataChartIngreso = async() => {
    
    try {
      const response = await controlador.getIngresosPordia(id,!isPersonal,date1);
   
      if (response.length !== 0) {
          const dataPoints = response.map(item => {
              return { label: `Día ${item.Dia}`, y: item.MontoTotal };
          });
          setChart(dataPoints);
          //console.log(dataPoints)
      } else alert("ERROR al obtener datos");
    } catch (error) {
      console.error('Error en la función setDataChartIngreso:', error);
    }

  }

  const setDataChartGasto = async() => {
    
    try {
      const response = await controlador.getGastosPordia(id,!isPersonal,date1);
   
      if (response.length !== 0) {
        const dataPoints = response.map(item => {
            return { label: `Día ${item.Dia}`, y: item.MontoTotal };
          });
          setChart(dataPoints);
          //console.log(dataPoints)
      } else alert("ERROR al obtener datos");
    } catch (error) {
      console.error('Error en la función setDataChartGasto:', error);
    }

  }



  const handleGI = (isIngreso) => {
    let msg = isPersonal ? 'Personal: \n' : 'Negocio: \n';
    msg += isIngreso ? 'Tendencia ingreso' : 'Tendencia gasto';
    //alert(msg);
    setIngreso(isIngreso);

    if(isIngreso)setDataChartIngreso()
    else setDataChartGasto()

  } 

  const handleDate1 = date => {
    setDate1(date);
    if(es_ingreso)setDataChartIngreso()
    else setDataChartGasto()
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
          dateFormat="yyyy/MM/dd" // Puedes ajustar el formato según tus necesidades
          scrollableYearDropdown
        />
        </div>

        <div className="mt-5 pt-5">
        {dataChart.length === 0 ? (
          <p style={{ textAlign: 'center', fontWeight: 'bold',fontSize: '1.3em'  }}>
            No se encontraron datos en la fecha seleccionada.</p>
        ) : (
          <BarChart data = {dataChart}/>  
        )}
      </div>

    </CustomCard>
    </>
  );}

  export default Detalle;