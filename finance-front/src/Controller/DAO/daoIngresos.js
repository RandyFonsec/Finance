// daoIngresos.js

//Se encarga de llamar a la api de esta direccion
const BASE = process.env.REACT_APP_BASE_URL;

const daoIngresos = {

getIngresosRecientes: async (id_usuario,fechaInicio, fechaFin) => {
  
  const url = BASE + '/ingresos/getIngresosRecientes'; 
  const data = {
    id_usuario,
    fechaInicio,
    fechaFin,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if(response)
      return response.json();

  } catch (error) {
    console.error('Error en la función getIngresosRecientes:', error);
    throw error;
  }
},

registrarIngreso: async (gasto) => {
  
    const url = BASE + '/ingresos/registrar'; 
  
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: gasto,
      });
      if(response)
        return response;
  
    } catch (error) {
      console.error('Error en la función registrarIngreso:', error);
      throw error;
    }
  },

getCategorias: async (id_usuario) => {
  
    const url = BASE + `/ingresos/getCategorias/${id_usuario}`; 
  
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if(response)
        return response.json();
  
    } catch (error) {
      console.error('Error en la función getCategorias:', error);
      throw error;
    }
  },

  registrarCategoria: async (nombre,id_usuario) => {
  
    const url = BASE + '/ingresos/registrarCategoria'; 
    const data = {
        id_usuario,
        nombre,
      };
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if(response)
        return response;
  
    } catch (error) {
      console.error('Error en la función registrarCategoria:', error);
      throw error;
    }
  },

  actualizarCategoria: async (categoria) => {
  const url = BASE + '/ingresos/actualizarCategoria'; 
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: categoria,
      });
      if(response)
        return response;
  
    } catch (error) {
      console.error('Error en la función actualizarCategoria:', error);
      throw error;
    }
  },

  eliminarCategoria: async (id) => {
    const url = BASE + '/ingresos/eliminarCategoria'; 
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: id,
        });
        if(response)
          return response;
    
      } catch (error) {
        console.error('Error en la función eliminarCategoria:', error);
        throw error;
      }
    },
    

};



module.exports = daoIngresos;
