import React from 'react'
import Nav from './Nav'
import map from'./img/map.jpeg'
import './style/style.css'
function Location() {
  return (
    <>
    <Nav/>
    <div className='map-img container d-flex justify-content-center'>
      <img src={map} style={{width:'600px',height:'400px'}} alt=''/>
    </div>
    </>
  )
}

export default Location