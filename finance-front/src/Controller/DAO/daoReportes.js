// daoReportes.js

//Se encarga de llamar a la api de esta direccion
const BASE = process.env.REACT_APP_BASE_URL;

const daoReportes = {

getIngresosPormes: async (id_usuario,es_comercio,fechaInicio, fechaFin) => {
  
  const url = BASE + '/reportes/getIngresosPormes'; 
  const data = {
    id_usuario,
    es_comercio,
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
    console.error('Error en la función getIngresosPormes:', error);
    throw error;
  }
},

getGastosPormes: async (id_usuario,es_comercio,fechaInicio, fechaFin) => {
  
    const url = BASE + '/reportes/getGastosPormes'; 
    const data = {
      id_usuario,
      es_comercio,
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
      console.error('Error en la función getGastosPormes:', error);
      throw error;
    }
  },

  getIngresosPordia: async (id_usuario,es_comercio,fecha) => {
  
    const url = BASE + '/reportes/getIngresosPordia'; 
    const data = {
      id_usuario,
      es_comercio,
      fecha,
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
      console.error('Error en la función getIngresosPordia:', error);
      throw error;
    }
  },

  getGastosPordia: async (id_usuario,es_comercio,fecha) => {
  
    const url = BASE + '/reportes/getGastosPordia'; 
    const data = {
      id_usuario,
      es_comercio,
      fecha,
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
      console.error('Error en la función getGastosPordia:', error);
      throw error;
    }
  },
    

};



module.exports = daoReportes;
