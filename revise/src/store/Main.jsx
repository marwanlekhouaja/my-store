import React, { useEffect, useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Location from './Location'
import Products from './Products'
import DetailleProduct from './DetailleProduct'
import Nav from './Nav'
import NotFound from './NotFound'
function Main() {
    const [products,setProducts]=useState([])
  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res=>res.json())
    .then(data=>setProducts(data.products))
  },[])
  return (
    <>
    
    <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/location' element={<Location/>}/>
            <Route path='/products' element={<Products produits={products} />} />
            <Route path='/products/detaille/:id' element={<DetailleProduct produits={products}/>}/>
            <Route path='*' element={<NotFound/>}></Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default Main