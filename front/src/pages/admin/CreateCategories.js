import React, { useState } from 'react'
import { createCategory } from '../../services/apiCategories'

//aqui viene boostrap de react
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//swite alerta
import Swal from 'sweetalert2'

const CreateCategories = () => {
 
  //aqui voy a llamar las categorias
  const [categoria, setCategoria] = useState({
    
    descripcion:" ",  
    title:" "
 
  });
  
  const handleInput = (e)=>{
    const {name, value} = e.target;
    setCategoria({
      ...categoria,
      [name]: value
    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      // Llamamos a la función de servicio para crear el producto
      Swal.fire({
        title: 'Guardar Categoria?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        denyButtonText: `No guardar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Categoria Guardada!', '', 'success')
          //producto creado
          const createdCategory = createCategory(categoria);
          console.log('Categoria creada:', createdCategory);
        } else if (result.isDenied) {
          Swal.fire('Categoria no creada', '', 'info')
        }
      })
      // Puedes realizar acciones adicionales aquí, como redirigir al usuario a otra página
    } catch (error) {
      console.error('Error al crear la categoria:', error);
      // Puedes mostrar un mensaje de error al usuario o manejarlo de otra manera
    }
  };

  return (
    <div>
    <h1>add categorias</h1>
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" >
          <Form.Label htmlFor="title">Nombre de Categoria</Form.Label>
          <Form.Control 
           type="text"
           id="title"
           name="title"
           value={categoria.title}
           onChange={handleInput}
           placeholder="camisa de cuero"
           required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="descripcion">Descripcion</Form.Label>
          <Form.Control 
           as="textarea"
           rows={3}
           id="descripcion"
            name="descripcion"
            value={categoria.descripcion}
            onChange={handleInput}
            required
          />
        </Form.Group>
        <Button type="submit">Agregar Producto</Button>
    </Form>
  </div>
  )
}

export default CreateCategories
