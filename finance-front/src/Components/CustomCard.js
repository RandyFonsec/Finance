import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './componentStyles.module.css'


function CustomCard({ title, children }) {
  return (
    <div className={styles.card}>
      <Card className = "my-4">
        <Card.Body className="px-5 py-5">
          <Card.Title className="">{title}</Card.Title>
          <div>  
            {children}
          </div>  
        </Card.Body>
      </Card>
    </div>
  );
}

export default CustomCard;
