import React, { useRef, useState } from 'react'
import { NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './style/style.css'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap'
function Nav() {
  const refCheck=useRef()
  const [dark,setDark]=useState(false)
  let body=document.querySelector('body').style
  
    const styleLink={
        textDecoration:'none',
        color:dark?'white':'black',
        fontFamily:'monospace',
        padding:'8px',
        marginLeft:'12px',
        marginRight:'12px'

      } 
    const styleNav='shadow-lg p-3'
    const darkMode=()=>{
      setDark(!dark)   
    }  
    if(dark){
      body.backgroundColor='#23272f'
      body.color='white'
    }
    else{
      body.backgroundColor='white'
      body.color='black'

    }
    // make navbar responsive
   const [showMenu,setshowMenu]=useState(false)
   const showmenu=()=>{
    setshowMenu(!showMenu)
    
   }

   
  return (
    <>
    <nav className={styleNav} style={{backgroundColor:dark?'#23272f':'white'}}>
       <div className="titre">
            <h2 style={{fontFamily:'monospace'}}><Link to='/' style={{color:'cornflowerblue'}}>MarwanShop</Link></h2>
       </div>
       <div className={`links ${showMenu?'open':''}`} >
        {/* darkmode button */}
        <div className="darkmodeButton mt-1" style={{cursor:'pointer'}}>
        <span ref={refCheck} style={{fontSize:'27px'}} onClick={darkMode}><ion-icon name={dark?"sunny-outline":'moon-outline'}></ion-icon></span>
        </div>
        {/* links of the papge */}
        <NavLink style={styleLink} to='/' >Home</NavLink>
        <NavLink style={styleLink} to='/products'>Products</NavLink>
        <NavLink style={styleLink} to='/panier'>show your panier</NavLink>
        <NavLink style={styleLink} to='/location' >Location</NavLink>
       </div>
       {/* button dial menu li ila brkna 3la showMenu kiban les liens et icon ktwli bhal m9ss w ila show menu knt false ki3awd ykhtafiw les liens */}
       <div className='menuButton' onClick={showmenu}><ion-icon name={showMenu?"close-outline":"menu-outline"}></ion-icon></div>
    </nav>
    
    </>
  )
}

export default Nav