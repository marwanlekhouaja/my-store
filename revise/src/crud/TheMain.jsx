import React, { useEffect, useState } from 'react'
import AppCrud from './AppCrud'

function TheMain() {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res=>res.json())
        .then(product=>setData(product.products))
    },[])
  return (
    <>
    <AppCrud produits={data} />
    </>
  )
}

export default TheMain