import React from 'react'
import { Link } from 'react-router-dom'
import './touch.css'

function Touch() {
  return (
    <div className='touch-container'>
        <div className="title-touch">
             <h2>What are you waiting for you?</h2>
        </div>
       <div className="touch-buttom">
           <Link to="/contact">
             <button> get in touch</button>
           </Link>
       </div>
    </div>
  )
}

export default Touch
