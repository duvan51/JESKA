import React from 'react'
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react'
import {getProducts} from '../../services/api'
import {getCategories} from '../../services/apiCategories'


const ProductList = () => {
  const [Data, setData]=useState([])
  const [Categoria, setCategoria]=useState([])  
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


    useEffect(() => {
      // Llama a la función de servicio para obtener productos
      getCategories()
        .then(data => {
          // Maneja los datos obtenidos
          setCategoria(data);
          console.log(data)
        })
        .catch(error => {
          // Maneja los errores
          console.error(error);
        });
  },[])

    

  
  
  
  
  return (
    <Table striped="columns">
      <thead>
        <tr>
          <th>#</th>
          <th>Titulo</th>
          <th>Precio</th>
          <th>Categoria</th>
          <th>Accion</th>
        </tr>
      </thead>
      <tbody>
        {Data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.price}</td>
            
              {Categoria.map((cat)=>(
                cat.id === item.category_id ?(
                  <td key={cat.id}>
                    {cat.title}
                  </td>
              ): null
              ))}
           
            <td>
              <button>Edit</button>
              -
              <button>Delete</button>
            </td>
          </tr>

        ))}
 
        
        
      </tbody>
    </Table>
  )
}
export default ProductList
