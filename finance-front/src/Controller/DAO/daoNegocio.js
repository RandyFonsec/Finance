// daoNegocio.js negocio


//Se encarga de llamar a la api de esta direccion
const BASE = process.env.REACT_APP_BASE_URL;

const daoNegocio = {

getNegocio: async (id_usuario) => {
  
    const url = BASE + `/negocio/getNegocio/${id_usuario}`; 
  
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
      console.error('Error en la función getNegocio:', error);
      throw error;
    }
  },

  actualizarNegocio: async (nombre,id_usuario) => {
  
    const url = BASE + '/negocio/actualizarNegocio'; 
    const data = {
        id_usuario,
        nombre,
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
        return response;
  
    } catch (error) {
      console.error('Error en la función actualizarNegocio:', error);
      throw error;
    }
  },

getBalanceImpuestos: async (id_usuario,fechaInicio, fechaFin) => {
  
  const url = BASE + '/negocio/getBalanceImpuestos'; 
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
    if(response){
      return response.json();
    }

  } catch (error) {
    console.error('Error en la función getBalanceImpuestos:', error);
    throw error;
  }
},
//-------------------------------------------------------------------------------------------//
getIngresos: async (id_usuario) => {
  
    const url = BASE + `/negocio/getIngresos/${id_usuario}`; 
  
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
      console.error('Error en la función getIngresos:', error);
      throw error;
    }
  },

registrarIngreso: async (gasto) => {
  
    const url = BASE + '/negocio/registrarIngreso'; 
  
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

getCategoriasIngreso: async (id_usuario) => {
  
    const url = BASE + `/negocio/getCategoriasIngreso/${id_usuario}`; 
  
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
      console.error('Error en la función getCategoriasIngreso:', error);
      throw error;
    }
  },

  registrarCategoriaIngreso: async (nombre,id_usuario) => {
  
    const url = BASE + '/negocio/registrarCategoriaIngreso'; 
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
      console.error('Error en la función registrarCategoriaIngreso:', error);
      throw error;
    }
  },

actualizarCategoriaIngreso: async (categoria) => {
  const url = BASE + '/negocio/actualizarCategoriaIngreso'; 
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
      console.error('Error en la función actualizarCategoriaIngreso:', error);
      throw error;
    }
  },

  eliminarCategoriaIngreso: async (id) => {
    const url = BASE + '/negocio/eliminarCategoriaIngreso'; 
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
        console.error('Error en la función eliminarCategoriaIngreso:', error);
        throw error;
      }
    },
      //-------------------------------------------------------------------------------------------//
getGastos: async (id_usuario) => {
  
    const url = BASE + `/negocio/getGastos/${id_usuario}`; 
  
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
      console.error('Error en la función getGastos:', error);
      throw error;
    }
  },

  registrarGasto: async (gasto) => {
  
    const url = BASE + '/negocio/registrarGasto'; 
  
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
      console.error('Error en la función registrarGasto:', error);
      throw error;
    }
  },

getCategoriasGasto: async (id_usuario) => {
  
    const url = BASE + `/negocio/getCategorias/${id_usuario}`; 
  
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
      console.error('Error en la función getCategoriasGasto:', error);
      throw error;
    }
  },

registrarCategoriaGasto: async (nombre,id_usuario) => {
  
    const url = BASE + '/negocio/registrarCategoriaGasto'; 
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
      console.error('Error en la función registrarCategoriaGasto:', error);
      throw error;
    }
  },

actualizarCategoriaGasto: async (categoria) => {
  const url = BASE + '/negocio/actualizarCategoriaGasto'; 
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
      console.error('Error en la función actualizarCategoriaGasto:', error);
      throw error;
    }
  },

  eliminarCategoriaGasto: async (id) => {
    const url = BASE + '/negocio/eliminarCategoriaGasto'; 
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
        console.error('Error en la función eliminarCategoriaGasto:', error);
        throw error;
      }
    },
      //-------------------------------------------------------------------------------------------//


getImpuestos: async (id_negocio) => {
  
    const url = BASE + `/negocio/getImpuestos/${id_negocio}`; 
  
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
      console.error('Error en la función getImpuestos:', error);
      throw error;
    }
  },

registrarImpuesto: async (nombre,id_negocio,tasa) => {
  
    const url = BASE + '/negocio/registrarImpuesto'; 
    const data = {
        id_negocio,
        nombre,
        tasa,
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
      console.error('Error en la función registrarImpuesto:', error);
      throw error;
    }
  },

  actualizarImpuesto: async (impuesto) => {
  const url = BASE + '/negocio/actualizarImpuesto'; 
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: impuesto,
      });
      if(response)
        return response;
  
    } catch (error) {
      console.error('Error en la función actualizarImpuesto:', error);
      throw error;
    }
  },

  eliminarImpuestos: async (id) => {
    const url = BASE + `/negocio/eliminarImpuestos/${id}`; 
      try {
        const response = await fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        if(response)
          return response;
    
      } catch (error) {
        console.error('Error en la función eliminarImpuestos:', error);
        throw error;
      }
    },

};



module.exports = daoNegocio;


