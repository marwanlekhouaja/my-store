import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import "./style/style.css";
import 'bootstrap/dist/css/bootstrap.css'
function Products(props) {
  const styleContainer={width:'100%',flexWrap:'wrap',display:'flex',alignItems:'center',justifyContent:'center',marginTop:'1rem'}
  const styleImg={width:'200px',height:'200px'}
  let body=document.querySelector('body').style.backgroundColor
  let styleDiv={backgroundColor:body='#23272f'&&'white',color:body='#23272f'&&'black'}
  return (
    <>
    <Nav/>
    <div style={styleContainer}>
      {props.produits.map((product)=>(
        <div key={product.id} className='shadow-lg p-3 m-3 d-flex align-items-center flex-column' style={styleDiv}>
          <h5 style={{fontSize:'13px',textAlign:'center'}}>{product.title}</h5>
          <div><img src={product.images[0]} style={styleImg} alt=''/></div>
          <button className='btn btn-primary mt-4 w-100'><Link to={`/products/detaille/${product.id}`}>Plus detailles</Link></button>
        </div>
      ))}
    </div>
    </>
  )
}

export default Products