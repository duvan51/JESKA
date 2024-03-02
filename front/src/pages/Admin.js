import React from 'react'
import Slidebars from './admin/Components/Slidebars'
import { Link, Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <div className='admin'>
      <div className="slidebars" >
      <ul>
          <li><Link to="/admin/CreateProduct" >Crear producto</Link></li>
          <li><Link to="/admin/ProductList">lista de productos</Link></li>
          <li><Link to="/">Ventas</Link></li>
          <li><Link to="/">Landing</Link></li>
      </ul>
      
    </div>
      <div className='column2'>
          <Outlet />
      </div>
      
      <div className='column3'>
        anuncios y demas
      </div>
    </div>
  )
}

export default Admin
