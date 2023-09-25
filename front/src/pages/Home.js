
import { useEffect, useState } from 'react'
import {getProducts} from '../services/api'

import  CarrouselPrincipal  from './Tienda/components/Carrousels'

import Card from './Tienda/components/Card'
import FilterCards from './Tienda/filters/Filter_Categories'


import Carousel from 'react-bootstrap/Carousel';


const Home = () => {
  const [Data, setData]=useState([])
  const [selectedCategory, setSelectedCategory] = useState('');
  
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
    const categories = [...new Set(Data.map(product => product.category_id))];
    const filteredData = selectedCategory
    ? Data.filter(product => product.category_id === selectedCategory)
    : Data;

  const handleCategoryChange = event => {
    setSelectedCategory(event.target.value);
  };





  return (
      <div className='Home'>
         <>
         <CarrouselPrincipal />
         </>
         <div className='HomeBody'>
          <div className="home1 carrouselProduct">
            <h1>Productos</h1>
              <FilterCards
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
              />

              <Carousel className="card-container">
                {filteredData.map(product => (
                  <Carousel.Item>
                  <Card key={product.id} product={product} />
                  </Carousel.Item>
                ))}
              </Carousel>

          </div>
          <div className="home2 carrouselProduct">
            <h1>Productos</h1>
              <FilterCards
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
              />
              <div className="card-container">
                {filteredData.map(product => (
                  <Card key={product.id} product={product} />
                ))}
              </div>
          </div>
          <div className="home3 carrouselProduct">
            <h1>Productos</h1>
              <FilterCards
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
              />
              <div className="card-container">
                {filteredData.map(product => (
                  <Card key={product.id} product={product} />
                ))}
              </div>
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
