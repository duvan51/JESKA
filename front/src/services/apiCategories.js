import axios from 'axios'

const URL = "http://localhost:4000"

export const getCategories = async ()=>{
    try{
        const req = await axios.get(`${URL}/category`)
        return req.data
    }
    catch(err){
        console.error("error al obtener los productos: ", err)
        throw err;
    }
   
}


export const createCategory = async (productData) => {
    try {
      const response = await axios.post(`${URL}/category/`, productData);
      return response.data; // Si el servidor responde con los datos del producto creado
    } catch (error) {
      console.error('Error al crear el producto:', error);
      throw error;
    }
  };
