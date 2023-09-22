import axios from 'axios'

const urlUsers= "http://192.168.0.23:8080"  //este es para trabajo

//const urlUsers= "http://localhost:4000"  //este es para trabajo
//const urlUsers= "http://192.168.100.7:8080"  //este es para casa




export const getProducts = async ()=>{
    try{
        const req = await axios.get(`${urlUsers}/products`)
        return req.data
    }
    catch(err){
        console.error("error al obtener los productos: ", err)
        throw err;
    }
   
}

export const createproduct = async (productData) => {
    try {
      const response = await axios.post(`${urlUsers}/products/`, productData);
      return response.data; // Si el servidor responde con los datos del producto creado
    } catch (error) {
      console.error('Error al crear el producto:', error);
      throw error;
    }
  };
  