import './App.scss';
import  Home  from './pages/Home'
import Filterproduct from './pages/Filterproduct'

import Admin from './pages/Admin';
import CreateProduct from './pages/admin/CreateProduct'
import CreateCategories from './pages/admin/CreateCategories'
import { Route, Routes, Navigate } from 'react-router-dom';


import Header from './components/Header';
import Slidebars  from './pages/admin/Components/Slidebars';



const App = () => {
  return (
    <div className="App">
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<PublicRoutes />} />
    
        {/* Rutas de administración */}
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </div>
  );
};

// Componente que contiene las rutas públicas
const PublicRoutes = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/filterProducts" element={<Filterproduct />} />
      <Route path="/carts" element={<Home />} />
    </Routes>
  </>
);

// Componente que contiene las rutas de administración
const AdminRoutes = () => (
  <>
    <Slidebars />
    <Routes>
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/CreateProduct" element={<CreateProduct />} />
      <Route path="/admin/CreateCategories" element={<CreateCategories />} />
      {/* Puedes agregar más rutas hijas de administración aquí */}
      <Route path="/" element={<Navigate to="/admin" />} /> {/* Redirecciona a /admin por defecto */}
    </Routes>
  </>
);

export default App;