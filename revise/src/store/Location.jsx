import React from 'react'
import map from'./img/map.png'
import './style/style.css'
function Location() {
  return (
    <>
    <div className='map-img  d-flex justify-content-center'>
      <img src={map} style={{width:'100%',height:'120%',cursor:'pointer'}} alt=''/>
    </div>
    </>
  )
}

export default Location