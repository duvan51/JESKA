import axios from 'axios'

const urlUsers= "http://192.168.0.14:8080"  //este es para trabajo

//const urlUsers= "http://localhost:4000"  //este es para trabajo
//const urlUsers= "http://192.168.100.7:8081/users"  //este es para casa


export const getProducts = async () => {
    try {
        const res = await fetch(`${urlUsers}/products`);
        const data = await res.json();
       
        return data;
    } catch (err) {
        console.error("Error al obtener los productos: ", err);
        throw err;
    }
}

