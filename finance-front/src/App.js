import Lateral from './Components/Lateral.js'


import styles from './Pages/pageStyles.module.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Perfil from './Pages/Perfil.js'
import Ingresos from './Pages/Ingresos.js'
import Gastos from './Pages/Gastos.js'
import Negocio from './Pages/Negocio.js'
import Reportes from './Pages/Reportes.js'
import NotFound from './Pages/NotFound.js'
import LoginPage from './Pages/LoginPage.js'
import Login from './Components/Login.js'
import Registro from './Components/Registro.js'
import { useAuth } from './AuthContext';



function App() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="App">
      {isAuthenticated() ? (
        <div className={styles.main}>
          <BrowserRouter>
            <Lateral />
            <Routes>
              <Route path="/" element={<Perfil />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/ingresos" element={<Ingresos />} />
              <Route path="/gastos" element={<Gastos />} />
              <Route path="/negocio" element={<Negocio />} />
              <Route path="/reportes" element={<Reportes />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage> <Login/> </LoginPage>} />
            <Route path="/login" element={<LoginPage> <Login/> </LoginPage>} />
            <Route path="/registro" element={<LoginPage> <Registro/> </LoginPage>} />
            <Route path="*" element={<LoginPage> <Login/> </LoginPage>} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
