import axios from 'axios'

//const urlUsers= "http://192.168.0.14:8080"  //este es para trabajo

//const urlUsers= "http://localhost:4000"  //este es para trabajo
const urlUsers= "http://192.168.100.7:8080"  //este es para casa




export const getProducts = async ()=>{
    try{
        const req = await axios.get(`${urlUsers}/products`)
        console.log(req.data)
        return req.data
    }
    catch(err){
        console.error("error al obtener los productos: ", err)
        throw err;
    }
   
}