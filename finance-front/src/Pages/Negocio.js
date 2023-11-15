import React, {useState,useEffect} from 'react';
import { useAuth } from '../AuthContext';
import controlador from '../Controller/controlador.js'



import Button from 'react-bootstrap/Button';
import PieChart from '../Components/PieChart.js';
import CustomCard from '../Components/CustomCard.js'
import ModalNegocio from '../Components/ModalNegocio.js'
import DatePicker from "react-datepicker";
import styles from './pageStyles.module.css'
import "react-datepicker/dist/react-datepicker.css";

function Gastos() {
  const { user } = useAuth();
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [dataPie, setPie] = useState([]);
  const [show, setShow] = useState(false);
  const [negocio, setNegocio] = useState([]);

  useEffect(() => {
    getNegocio();
  }, [negocio]); 

  const getNegocio = async () => {
    try {
      const response = await controlador.getNegocio(user.id);
   
      if (response.length !== 0) {
        setNegocio(response);
        console.log(response)
      } else alert("ERROR");
    } catch (error) {
      console.error('Error en la función cargarCategorias:', error);
    }
  };

  const setDataPie = async() => {
    
    try {
      const response = await controlador.getBalanceImpuestos(user.id,date1, date2);
   
      if (response.length !== 0) {
          const sumaTotal = response.reduce((total, item) => total + item.Monto, 0);
          const dataPoints = response.map(item => {
            let porcentaje = (item.Monto / sumaTotal) * 100;
            porcentaje = sumaTotal === 0 ? 100 : porcentaje;
              return { y: porcentaje, label: item.Impuesto };
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



  return (


    
    <>



    <div className={styles.page}>
    
   {show && (
       <ModalNegocio negocio = {negocio[0]}  state = {show} handleState = {setShow}/>
    )}


    <CustomCard>
        <div className={styles.reportHeader}>
        <h2 className="fs-1 fw-bold me-5">{negocio.length > 0 && negocio[0].nombre}</h2>
        <Button 
        onClick ={() =>  setShow(true)}
        variant="outline-secondary">Editar</Button>
        </div>
    </CustomCard>
     


    <div className={styles.middle}>
    <CustomCard estilo = {'flex-fill mt-5'}>
        <h3 className="fs-3 fw-bold me-5">{negocio.length > 0 && negocio[0].nombre}</h3>
    </CustomCard>


    <CustomCard estilo = {'flex-fill mt-5'}>
   
        <h3 className="fs-3 fw-bold me-5">{negocio.length > 0 && negocio[0].nombre}</h3>
        
    </CustomCard>

    </div>
     


    <CustomCard estilo = {'mt-5'}>
   
    <h3 className="fs-3 fw-bold ">Balance de impuestos:</h3>
      <hr className="bg-danger border-2 border-top border-dark mb-5" />
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

      <div className="mt-5 pt-5">
        <PieChart title = {""} dataPie = {dataPie}/>
      </div>
        
    </CustomCard>
    






    </div>
    </>
  );
}

export default Gastos;