import React from 'react'
import { useEffect, useState } from 'react'

//services
import {getProducts} from '../../../services/api'
import {getCategories} from '../../../services/apiCategories'

import Card from '../components/Card'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const Carrousel_filter_bolsos = () => {
    const [Data, setData]=useState([])
    const [filteredData, setFilteredData] = useState([]);
    const [categoryes, setCategories]= useState([])
    const [title_category, setTitleCategory]= useState('')


    const categoria = 2
    
    //obtener la data de productos
      useEffect(() => {
          // Llama a la función de servicio para obtener productos
          getProducts()
            .then(data => {
              // Maneja los datos obtenidos
              setData(data);
                const filteredProducts = data.filter(
                    (product) => product.category_id === categoria
                );
              setFilteredData(filteredProducts)
            })
            .catch(error => {
              // Maneja los errores
              console.error(error);
            });
      },[])

      //obtener las categorias
      useEffect(() => {
        // Llama a la función de servicio para obtener productos
        getCategories()
          .then(categ => {
            // Maneja los datos obtenidos
            setCategories(categ);
          })
          .catch(error => {
            // Maneja los errores
            console.error(error);
          });
    },[])
   
    
   
    let foundCategory = null;
    categoryes.forEach((cat) => {
      if (cat.id === filteredData[0]?.category_id) { // Utiliza optional chaining (?.) para evitar errores si filteredData[0] es null o undefined
        foundCategory = cat.title; // Almacena el nombre de la categoría
      }
    });
  
    // El título de la categoría se establece en el estado
    useEffect(() => {
      if (foundCategory) {
        setTitleCategory(foundCategory);
      }
    }, [foundCategory]);

    console.log(title_category)




    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
  return (
    <>
      <h1>encuentra los mejores {title_category}</h1>
        <Carousel responsive={responsive}>
            {filteredData.map(product => (
                <Card key={product.id} product={product} />
            ))}
        </Carousel>
    </>
  )
}

export default Carrousel_filter_bolsos
