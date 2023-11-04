import React, { createContext, useEffect, useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Location from './Location'
import Products from './Products'
import DetailleProduct from './DetailleProduct'
import Nav from './Nav'
import NotFound from './NotFound'
import Panier from './Panier'

export const appcontext=createContext()
function Main() {
    const [products,setProducts]=useState([])
    useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res=>res.json())
    .then(data=>setProducts(data.products))
  },[])
  const [panier,setPanier]=useState([])
  const ajouterProduit=(product)=>{
    setPanier(prev=>[...prev,product])
  }

  const supprimerOrder=(order)=>{
    setPanier(prev=>[...prev,order])
  }
  return (
    <>
    <appcontext.Provider value={{produits:products,addItem:ajouterProduit,panierUser:panier,deleteOrder:supprimerOrder}} >
    <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/location' element={<Location/>}/>
            <Route path='/products' element={<Products/>} />
            <Route path='/products/detaille/:id' element={<DetailleProduct/>}/>
            <Route path='*' element={<NotFound/>}></Route>
            <Route path='/panier' element={<Panier/>}></Route>
        </Routes>
    </BrowserRouter>
    </appcontext.Provider>
    
    </>
  )
}

export default Main