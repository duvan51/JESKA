import axios from 'axios'

const URL = "http://localhost:8080"

export const getProducts = async ()=>{
    try{
        const req = await axios.get(`${URL}/products`)
        console.log(req)
        return req.data
    }
    catch(err){
        console.error("error al obtener los productos: ", err)
        throw err;
    }
   
}

//crear producto
export const createproduct = async (productData) => {
    try {
      const response = await axios.post(`${URL}/products/`, productData);
      return response.data; // Si el servidor responde con los datos del producto creado
    } catch (error) {
      console.error('Error al crear el producto:', error);
      throw error;
    }
  };
  
  export const UploadImage = async (ImageUpload) => {
    try {
      const response = await axios.post(`${URL}/products/upload`, ImageUpload);
      return response.data; // Si el servidor responde con los datos del producto creado
      
    } catch (error) {
      console.error('Error al crear el producto:', error);
      throw error;
    }
  };