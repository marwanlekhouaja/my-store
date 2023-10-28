import React from 'react'
import { useParams } from 'react-router-dom'
import Nav from './Nav'
import { Link } from 'react-router-dom'
const styleImg={width:'310px',height:'230px',borderRadius:'4px'}
const styleImges={width:'150px',height:'150px'}

function DetailleProduct(props) {
  const {id} =useParams()
  
  return (
    <>
    <Nav/>
    <div className="w-50 m-auto">
    {props.produits.map((product)=>
        Number(product.id) ===Number(id) &&
        <div key={product.id} className='shadow-lg p-3 m-3 d-flex align-items-center text-start flex-column '>

          <h5 style={{fontSize:'13px',textAlign:'center'}}>{product.title}</h5>

          <div><img src={product.images[0]} style={styleImg}  alt=''/></div>

          <div className="images d-flex align-items-center" >
            <img src={product.images[1]} className='shadow-lg p-2 rounded m-3' style={styleImges}  alt=''/>
            <img src={product.images[2]} className='shadow-lg p-2 rounded m-3' style={styleImges} alt=''/>
            <img src={product.images[3]} className='shadow-lg p-2 rounded m-3' style={styleImges} alt=''/>
          </div>
          <p className='w-75 text-center'>{product.description}</p>
          <p>Rating : {product.rating} </p>
          <p className='text-start'>Price : {product.price} $</p>
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