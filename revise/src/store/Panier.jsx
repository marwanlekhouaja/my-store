import React, { useContext } from 'react'
import { appcontext } from './Main'
// import { useParams } from 'react-router-dom'
import './style/style.css'
function Panier() {
  const context=useContext(appcontext)
  const product=context.panierUser


  const del=(p)=>{
    const newData=context.panierUser.filter((t)=>Number(t.id)!==parseInt(p.id))
    console.log(newData)
    // context.deleteOrder(newData[0])
  }
  
  return (
    <>
    <table className='panier table table-light container text-center mt-4 shadow'>
        <thead>
            <tr>
                <th>product name</th>
                <th>brand</th>
                <th>image</th>
                <th>number of order</th>
                <th>price</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {product.length!==0?product.map((p)=>(
                <tr  key={p.id}>
                    <td className='pt-4'>{p.title}</td>
                    <td className='pt-4'>{p.brand}</td>
                    <td><img src={p.images[0]} style={{width:'70px',height:'70px'}} alt='pict'/></td>
                    <td className='pt-4'>{p.count}</td>
                    <td className='pt-4'>{p.count*p.price} $</td>
                    <td><button className="btn btn-danger mt-3" onClick={()=>del(p)} ><ion-icon name="trash-outline"></ion-icon></button></td>
                    <td><button className="btn btn-success mt-3"><ion-icon name="create-outline"></ion-icon></button></td>
                </tr>
            )):<tr><td>no orders</td></tr>}
        </tbody>
    </table>
    </>
  )
}

export default Panier