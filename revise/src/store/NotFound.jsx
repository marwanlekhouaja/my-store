import React from 'react'
import { Link } from 'react-router-dom'
import './style/style.css'
function NotFound() {
  return (
    <>
    <div className="notfoundpage">
        <h4 className='fs-1'>Page not found</h4>
        <p className='w-50'>Unfortunately the page you're looking for doesn't exist (anymore) or 
            there was an error in the link you followed or typed
        </p>
        <button className='notfoundButton'>
            <Link to='/'>Go To Home Page</Link>
        </button>
    </div>
    </>
  )
}

export default NotFound