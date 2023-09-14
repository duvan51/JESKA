import React, { useState } from 'react'
import { createproduct } from '../../services/api'
import { useEffect} from 'react'
import { getCategories } from '../../services/apiCategories'


//aqui viene boostrap de react
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//swite alerta
import Swal from 'sweetalert2'


import axios from 'axios'


const CreateProduct = () => {
 
  //image
  const [imageURL, setImageURL] = useState(null);
  const handleImageUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', e.target.files[0]);

    try {
      // Enviar la imagen al servidor
      const response = await axios.post('http://localhost:4000/products/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Obtener la URL de la imagen del servidor
      const imageUrlFromServer = response.data.imageUrl;

      // Establecer la URL de la imagen en el estado para mostrarla
      setImageURL(imageUrlFromServer);
    } catch (error) {
      console.error('Error al subir la imagen:', error);
    }
  };
//end image


   
  const [Datas, setDatas] = useState([])
    useEffect(() => {
        // Llama a la función de servicio para obtener productos
        getCategories()
          .then(data => {
            // Maneja los datos obtenidos
            setDatas(data);
          })
          .catch(error => {
            // Maneja los errores
            console.error(error);
          });
    },[])

  //fin de las categorias
  
  const [product, setProduct] = useState({
    descripcion:" ",  
    price: 0,
    title:" ",
    category_id:0
  });
  
  const handleInput = (e)=>{
    const {name, value} = e.target;
    setProduct({
      ...product,
      [name]: value
    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      // Llamamos a la función de servicio para crear el producto
      Swal.fire({
        title: 'Guardar producto?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        denyButtonText: `No guardar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Producto Guardado!', '', 'success')
          //producto creado
          const createdProduct = createproduct(product);
          console.log('Producto creado:', createdProduct);
        } else if (result.isDenied) {
          Swal.fire('Producto no guardado', '', 'info')
        }
      })
      // Puedes realizar acciones adicionales aquí, como redirigir al usuario a otra página
    } catch (error) {
      console.error('Error al crear el producto:', error);
      // Puedes mostrar un mensaje de error al usuario o manejarlo de otra manera
    }
  };

  return (
    <div>
    <h1>add product</h1>
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" >
          <Form.Label htmlFor="title">Nombre del Producto</Form.Label>
          <Form.Control 
           type="text"
           id="title"
           name="title"
           value={product.title}
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
            value={product.descripcion}
            onChange={handleInput}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="price">Precio: </Form.Label>
          <Form.Control 
           type="number"
           id="price"
           name="price"
           value={product.price}
           onChange={handleInput}
           required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="category_id">Categoria: </Form.Label>
          <Form.Select 
           id="category_id"
           name="category_id"
           value={product.category_id}
           onChange={handleInput}
           required
          >
            <option value="">selecciona una categoria </option>
            {Datas.map((category) => (
              <option key={category.id} value={category.id}>
                {category.title}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Button type="submit">Agregar Producto</Button>
    </Form>
    <div>
      <h1>Subir y Mostrar Imagen</h1>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {imageURL && (
        <div>
          <h2>Imagen Subida</h2>
          <img src={imageURL} alt="Imagen Subida" />
        </div>
      )}
    </div>
  </div>
  )
}

export default CreateProduct
