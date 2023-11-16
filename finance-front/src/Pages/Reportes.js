import React, {useState} from 'react';
import { useAuth } from '../AuthContext';


import Tendencia from '../Components/Tendencia.js'
import Detalle from '../Components/Detalle.js'
import GasVIng from '../Components/GasVIng.js'
import CustomCard from '../Components/CustomCard.js'
import RadioButtons from '../Components/RadioButtons.js'

import "react-datepicker/dist/react-datepicker.css";
import styles from './pageStyles.module.css'


function Reportes() {
  const { user } = useAuth();
  const [isPersonal, setIsPersonal] = useState(true);

  const handleIsPersonal = (value) => {
    setIsPersonal(value);
    let msg = value ? 'Personal: \n' : 'Negocio: \n';
    //alert(msg);

  } 

  return (
    
    <>
    <div className={styles.page}>

        <CustomCard>
        <div className={styles.reportHeader}>
        <h2 className="fs-1 fw-bold me-5">Reportes</h2>
        <RadioButtons 
            opt1={'Personal'} 
            opt2={'Negocio'} 
            onOptionChange={handleIsPersonal}/>
        </div>
        </CustomCard>

        <div className = "my-5">
        <Tendencia  isPersonal = {isPersonal} id = {user.id} />
        </div>

        <div className = "my-5">
        <Detalle isPersonal = {isPersonal} id = {user.id} />
        </div>
        
        <div className = "my-5">
        <GasVIng isPersonal = {isPersonal} id = {user.id} />       
        </div>

      
    </div>
    </>
  );
}

export default Reportes;