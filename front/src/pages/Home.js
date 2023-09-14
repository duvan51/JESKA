
import { useEffect, useState } from 'react'
import {getProducts} from '../services/api'
import Header from '../components/Header'

const Home = () => {
  const [Data, setData]=useState([])
  
    useEffect(() => {
        // Llama a la función de servicio para obtener productos
        getProducts()
          .then(data => {
            // Maneja los datos obtenidos
            setData(data);
          })
          .catch(error => {
            // Maneja los errores
            console.error(error);
          });
    },[])
    console.log(Data)





  return (
      <div>
          <Header></Header>
          <ul>
            {Data.map((product)=>(
            <li key={product.id}>{product.title}</li>
            ))}
          </ul>   
      </div>
    )
}

export default Home
