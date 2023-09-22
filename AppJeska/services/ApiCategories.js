import axios from 'axios'

const urlCategorys= "http://192.168.0.23:8080"  //este es para trabajo

//const urlUsers= "http://localhost:4000"  //este es para trabajo
//const urlUsers= "http://192.168.100.7:8080"  //este es para casa




export const getCategorys = async ()=>{
    try{
        const req = await axios.get(`${urlCategorys}/category`)
        return req.data
    }
    catch(err){
        console.error("error al obtener los productos: ", err)
        throw err;
    }
   
}