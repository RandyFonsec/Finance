import React, {useState,useEffect} from 'react';


import LineChart from './LineChart.js'
import CustomCard from './CustomCard.js'
import RadioButtons from './RadioButtons.js'
import DatePicker from "react-datepicker";

import controlador from '../Controller/controlador.js'

import "react-datepicker/dist/react-datepicker.css";
import styles from './componentStyles.module.css'


function Tendencia({isPersonal,id}){
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [dataChart, setChart] = useState([]);
  const [es_ingreso, setIngreso] = useState(true);

  useEffect(() => {
    if(es_ingreso)setDataChartIngreso()
    else setDataChartGasto()
  }, [isPersonal]); 


  const setDataChartIngreso = async() => {
    
    try {
      const response = await controlador.getIngresosPormes(id,!isPersonal,date1, date2);
   
      if (response.length !== 0) {
          const dataPoints = response.map(item => {
              return { x: item.Mes, y: item.MontoTotal };
          });
          setChart(dataPoints);
          //console.log(dataPoints)
      } else alert("ERROR  al obtener datos");
    } catch (error) {
      console.error('Error en la función setDataChartIngreso:', error);
    }

  }

  const setDataChartGasto = async() => {
    
    try {
      const response = await controlador.getGastosPormes(id,!isPersonal,date1, date2);
   
      if (response.length !== 0) {
        const dataPoints = response.map(item => {
            return { x: item.Mes, y: item.MontoTotal };
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

  const handleDate2 = date => {
    setDate2(date);
    if(es_ingreso)setDataChartIngreso()
    else setDataChartGasto()
  };


  return(
  	<>
	<CustomCard>
        <div className={styles.reportHeader}>
        <h3 className="fs-3 fw-bold me-5">Tendencia por período</h3>
        <RadioButtons 
            opt1={'Ingresos'} 
            opt2={'Gastos'} 
            onOptionChange={handleGI}/>
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

        <div className="mt-5 pt-5">
        {dataChart.length === 0 ? (
          <p style={{ textAlign: 'center', fontWeight: 'bold',fontSize: '1.3em'  }}>
            No se encontraron datos en la fecha seleccionada.</p>
        ) : (
          <LineChart data = {dataChart} />  
        )}
      </div>

    </CustomCard>
    </>
  );}

  export default Tendencia;