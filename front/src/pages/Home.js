
import { useEffect, useState } from 'react'
import {getProducts} from '../services/api'

import  CarrouselPrincipal  from './Tienda/components/Carrousels'
import Carrousel_filer_zapatos from './Tienda/filters/Carrousel_filter_zapatos'
import Carrousel_filer_bolsos from './Tienda/filters/Carrousel_filter_bolsos'
import Carrousel_filer_null from './Tienda/filters/Carrousel_filter_null'

import Card from './Tienda/components/Card'





const Home = () => {
  const [Data, setData]=useState([])
  
    useEffect(() => {
        // Llama a la función de servicio para obtener productos
        getProducts()
          .then(data => {
            // Maneja los datos obtenidos
            setData(data);
            console.log(data)
          })
          .catch(error => {
            // Maneja los errores
            console.error(error);
          });
    },[])

  //carrousel   ------------------
  
  return (
      <div className='Home'>
         <>
           <CarrouselPrincipal />
         </>
         <div className='HomeBody'>
            <div className="home1 carrouselProduct">
              <Carrousel_filer_zapatos />
            </div>
            <div className="home2 carrouselProduct">
              <Carrousel_filer_bolsos />
            </div>
            <div className="home3 carrouselProduct">
              <Carrousel_filer_null />
            </div>
        </div>


          <ul>
            {Data.map((product)=>(
            <li key={product.id}>{product.title}</li>
            ))}
          </ul>   
      </div>
    )
}

export default Home
