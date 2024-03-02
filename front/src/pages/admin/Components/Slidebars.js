import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Slidebars = () => {
  return (
    <div className="slidebars" >
      <ul>
          <li><Link to="/admin/CreateProduct" >Productos</Link></li>
          <li><Link to="/admin/ProductList">Categorias</Link></li>
          <li><Link to="/">Ventas</Link></li>
          <li><Link to="/">Landing</Link></li>
      </ul>
      
    </div>
    
  )
}
export default Slidebars
