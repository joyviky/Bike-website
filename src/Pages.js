import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Login'
import Product from './Product';


const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Product" element={<Product/>}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default Pages