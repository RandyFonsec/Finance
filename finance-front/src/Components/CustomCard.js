import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './componentStyles.module.css'


function CustomCard({ estilo, children }) {
  return (
    <div className = {`${estilo} ${styles.card}`}>
      <Card className="border border-3 border-dark">
        <Card.Body>
          <div style = {{padding : '4%'}}>  
            {children}
          </div>  
        </Card.Body>
      </Card>
    </div>
  );
}

export default CustomCard;
