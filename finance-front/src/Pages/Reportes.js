import React, {useState} from 'react';



import Tendencia from '../Components/Tendencia.js'
import Detalle from '../Components/Detalle.js'
import GasVIng from '../Components/GasVIng.js'
import CustomCard from '../Components/CustomCard.js'
import RadioButtons from '../Components/RadioButtons.js'

import "react-datepicker/dist/react-datepicker.css";
import styles from './pageStyles.module.css'


function Reportes() {
  const [isPersonal, setIsPersonal] = useState(true);

  const handleIsPersonal = (value) => {
    setIsPersonal(value);
    let msg = value ? 'Personal: \n' : 'Negocio: \n';
    alert(msg);

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

        <Tendencia isPersonal = {isPersonal} />

        <Detalle isPersonal = {isPersonal} />
        
        <GasVIng isPersonal = {isPersonal} />       


      
    </div>
    </>
  );
}

export default Reportes;