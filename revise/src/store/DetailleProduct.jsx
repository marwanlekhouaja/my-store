import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './style/style.css'

function DetailleProduct(props) {
  const styleImg={width:'310px',height:'230px',borderRadius:'4px'}
  const styleImges={width:'150px',height:'150px'}
  const {id} =useParams()
  const [count,setCount]=useState(1)
  const increment=()=>{
    setCount(prev=>prev+1)

  }
  const decrement=()=>{
    setCount(prev=>prev-1)
    count<=1&&setCount(1)
  }
  let body = document.querySelector('body').style.backgroundColor;

  
  return (
    <>
    {/* <Nav/> */}
    <div className="w-50 m-auto">
    {props.produits.map((product)=>
        Number(product.id) ===Number(id) &&
        <div key={product.id} className='shadow-lg p-3 m-3 d-flex align-items-center text-start flex-column '>

          <h5 style={{fontSize:'13px',textAlign:'center'}}>{product.title}</h5>
          
          <div><img src={product.images[0]} style={styleImg}  alt=''/></div>

          <div className="images d-flex align-items-center justify-content-center" style={{width:'100%',flexWrap:'wrap'}}>
            <img src={product.images[1]} className='shadow-lg p-2 rounded m-3' style={styleImges}  alt=''/>
            <img src={product.images[2]} className='shadow-lg p-2 rounded m-3' style={styleImges} alt=''/>
            <img src={product.images[3]} className='shadow-lg p-2 rounded m-3' style={styleImges} alt=''/>
          </div>
          <p className='w-75 text-center'>{product.description}</p>
          <p>Rating : {product.rating} </p>
          <div className={`count shadow-lg d-flex justify-content-around align-items-center text-dark rounded ${body!=='white'&&'bg-light'}`} >
            <button onClick={increment}>+</button>
            <h5 className='mt-2'>{count}</h5>
            <button onClick={decrement}>-</button>
          </div>
          <p className='text-start fs-1'>{product.price*Number(count)} $</p>
          <button className='btn btn-primary'> 
            <Link to='/products'>Back to other products</Link>
          </button>
        </div>
      )}
    </div>
    </>
  )
}

export default DetailleProduct