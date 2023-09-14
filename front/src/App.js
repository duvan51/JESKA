import './App.css';
import  Home  from './pages/Home'
import Admin from './pages/Admin';
import CreateProduct from './pages/admin/CreateProduct'
import CreateCategories from './pages/admin/CreateCategories'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-h">
      </header>
      <Routes>
        {/* rutas publicas   */}
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
          {/* rutas hijas de adminstracion */}
          <Route path='/admin/CreateProduct' element={<CreateProduct />} />
          <Route path='/admin/CreateCategories' element={<CreateCategories />} />
      </Routes>

    </div>
  );
}

export default App;
