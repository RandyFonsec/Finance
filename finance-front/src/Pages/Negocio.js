import React, {useState} from 'react';



import Button from 'react-bootstrap/Button';
import PieChart from '../Components/PieChart.js';
import CustomCard from '../Components/CustomCard.js'
import ModalNegocio from '../Components/ModalNegocio.js'
import styles from './pageStyles.module.css'

function Gastos() {
  const [show, setShow] = useState(false);


  return (


    
    <>



    <div className={styles.page}>
    
   {show && (
       <ModalNegocio state = {show} handleState = {setShow}/>
    )}


    <CustomCard>
        <div className={styles.reportHeader}>
        <h2 className="fs-1 fw-bold me-5">Mi negocio</h2>
        <Button 
        onClick ={() =>  setShow(true)}
        variant="outline-secondary">Editar</Button>
        </div>
    </CustomCard>
     


    <div className={styles.middle}>
    <CustomCard estilo = {'flex-fill mt-5'}>
        <h3 className="fs-3 fw-bold me-5">Mi negocio</h3>
    </CustomCard>


    <CustomCard estilo = {'flex-fill mt-5'}>
   
        <h3 className="fs-3 fw-bold me-5">Mi negocio</h3>
        
    </CustomCard>

    </div>
     


    <CustomCard estilo = {'mt-5'}>
   
        <h3 className="fs-3 fw-bold me-5">Balance</h3>
        <PieChart title = {""} dataPie = {[]}/>
        
    </CustomCard>
    






    </div>
    </>
  );
}

export default Gastos;