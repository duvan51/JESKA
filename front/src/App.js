import './App.css';
import Categories  from './components/Categories/Categories.js'
import  Products  from './components/Products/Products.js'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-h">
      </header>
      <Routes>
        {/* rutas publicas   */}
        <Route path='/' element={<Products />} />
      </Routes>

    </div>
  );
}

export default App;
