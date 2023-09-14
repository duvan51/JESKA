import React, { useEffect } from 'react'



const Products = () => {
  
  const data = async()=>{
    const res= await fetch("http://localhost:4000/products")
    const data  = await res.json()
    console.log(data)
  }
  
  useEffect(()=>{
    data()
  },[])
  
  
  return (
    <div>
      <h1>prodctos</h1>
    </div>
  )
}

export default Products