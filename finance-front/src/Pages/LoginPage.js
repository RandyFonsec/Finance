import React from 'react';

import styles from './pageStyles.module.css'

function LoginPage({children}) {
  

  return (
    <div className={styles.loginContainer}>

      <nav className={styles.navLogin}> <h1 className="fs-1 py-5 ps-3"> Mis Finanzas </h1> </nav>

      <div className={styles.mainArea}>
        
      {children}

      </div>

      <footer className={styles.footerLogin}> <p className="fs-6 fw-lighter"> © Copyright 2023 Mis Finanzas. Todos los derechos reservados </p> </footer>

    </div>
  );
}

export default LoginPage;
