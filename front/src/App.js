import './App.scss';
import  Home  from './pages/Home'
import Filterproduct from './pages/Filterproduct'
import HomeSearch from './pages/Home_search'

import Admin from './pages/Admin';
import CreateProduct from './pages/admin/CreateProduct'
import CreateCategories from './pages/admin/CreateCategories'
import ProductList from './pages/admin/ProductList';
import { Route, Routes, Navigate } from 'react-router-dom';


import Header from './components/Header';
import Slidebars  from './pages/admin/Components/Slidebars';



const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Home />} />
        
        <Route path="HomeSearch" element={<HomeSearch />} />
        <Route path="filterProducts" element={<Filterproduct />} />
        <Route path="carts" element={<Home />} />
      
        {/* Rutas de administración */}
        <Route path="admin" element={<Admin />}>
          <Route path="ProductList" element={<ProductList />} />
          <Route path="CreateProduct" element={<CreateProduct />} />
          <Route path="CreateCategories" element={<CreateCategories />} />
        </Route>
      </Routes>
    </div>
  );
};



export default App;



