import React, {useState,useEffect} from 'react';
import { useAuth } from '../AuthContext';

import CustomCard from '../Components/CustomCard.js'
import CustomDialog from '../Components/CustomDialog.js'
import Registrar from '../Components/Registrar.js'
import Gestionar from '../Components/Gestionar.js'
import PieChart from '../Components/PieChart.js';
import DatePicker from "react-datepicker";

import controlador from '../Controller/controlador.js'

import "react-datepicker/dist/react-datepicker.css";
import styles from './pageStyles.module.css'


function Ingresos() {
  const { user } = useAuth();
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [dataPie, setPie] = useState([]);
  const [categorias, setCategorias] = useState([]);

  
  //Para alerta:
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [msg, setMsg] = useState('');
  const showAlert = (title,msg) => {
    setShow(true);
    setTitle(title);
    setMsg(msg);

  }


  const cargarCategorias = async () => {
    try {
      const response = await controlador.getCategorias(user.id);
   
      if (response.length !== 0) {
        setCategorias(response);
      } else alert("ERROR al obtener categorias");
    } catch (error) {
      console.error('Error en la función cargarCategorias:', error);
    }
  };
  

  useEffect(() => {
    cargarCategorias();
  }, []);

  
  const setDataPie = async() => {
    
    try {
      const response = await controlador.getIngresosRecientes(user.id,date1, date2);
   
      if (response.length !== 0) {
          const sumaTotal = response.reduce((total, item) => total + item.MontoTotal, 0);
          const dataPoints = response.map(item => {
              let porcentaje = (item.MontoTotal / sumaTotal) * 100;
              porcentaje = sumaTotal === 0 ? 100 : porcentaje;
              return { y: porcentaje, label: item.Categoria };
          });
          setPie(dataPoints);
          //console.log(dataPoints)
      } else alert("ERROR al obtener datos");
    } catch (error) {
      console.error('Error en la función setDataPie:', error);
    }

  }

  const handleDate1 = date => {
    setDate1(date);
    setDataPie();
  };

  const handleDate2 = date => {
    setDate2(date);
    setDataPie();
  };

  const handleGasto = async(gasto) => {
     try {
      const response = await controlador.registrarIngreso(JSON.stringify(gasto));
   
      if (response.status === 200) {
        showAlert("Éxito","Ingreso agregado exitosamente");
      } else alert("ERROR de conexión");
    } catch (error) {
      console.error('Error en la función handleGasto:', error);
    }
  }

  const handleAdd = async(nombre) => {
    try {
      const response = await controlador.registrarCategoria(nombre,user.id);
   
      if (response.status === 200) {
        showAlert("Éxito","Categoria agregada exitosamente");
      } else alert("ERROR de conexión");
    } catch (error) {
      console.error('Error en la función handleGasto:', error);
    }
  }

  const handleUpdate = async(categoria) => {
     try {
      const response = await controlador.actualizarCategoria(JSON.stringify(categoria));
   
      if (response.status === 200) {
        showAlert("Éxito","Categoria actualizada exitosamente");
      } else alert("ERROR de conexión");
    } catch (error) {
      console.error('Error en la función handleGasto:', error);
    }
  }

  const handleDelete = async(id) => {
     try {
      const response = await controlador.eliminarCategoria(JSON.stringify({id}));
   
      if (response.status === 200) {
        showAlert("Éxito","Categoria eliminada exitosamente");
      } else alert("ERROR de conexión");
    } catch (error) {
      console.error('Error en la función handleGasto:', error);
    }
  }
  return (
    
    <>

    <div className={styles.page}>

    <CustomCard>
      <h3 className="fs-3 fw-bold ">Ingresos recientes</h3>
      <hr className="bg-danger border-2 border-top border-dark mb-5" />
      <div className="mt-3 text-center">
        <label htmlFor="date1">{"Desde: "}</label>
        <DatePicker
          id="date1"          
          selected={date1}
          onChange={handleDate1}
          dateFormat="yyyy/MM/dd" 
          scrollableYearDropdown
        />
        <label className = "ms-4" htmlFor="date1">{"Hasta: "}</label>
        <DatePicker
          id="date2"
          selected={date2}
          onChange={handleDate2}
          dateFormat="yyyy/MM/dd"
          scrollableYearDropdown
      />
      </div>

      <div className="mt-5 pt-5">
        {dataPie.length === 0 ? (
          <p style={{ textAlign: 'center', fontWeight: 'bold',fontSize: '1.3em'  }}>
            No se encontraron datos en la fecha seleccionada.</p>
        ) : (
          <PieChart title="" dataPie={dataPie} />
        )}
      </div>

    </CustomCard>

    <CustomCard estilo = {'my-5'}>
      <h3 className="fs-3 fw-bold">Registrar ingreso:</h3>      
      <hr className="bg-danger border-2 border-top border-dark mb-5" />
      <Registrar categories = {categorias} handleSubmit = {handleGasto}/>
    </CustomCard>

    <CustomCard estilo = {'my-5'}>
      <h3 className="fs-3 fw-bold">Gestionar categorías:</h3>
      <hr className="bg-danger border-2 border-top border-dark mb-5" />
      <Gestionar 
      categories = {categorias} 
      addFunction = {handleAdd}
      deleteFunction = {handleDelete}
      updateFunction = {handleUpdate}
      />

    </CustomCard>
     
      <CustomDialog state = {show} handler = {setShow} title = {title} message = {msg}/>
  

    </div>
    </>
  );
}

export default Ingresos;