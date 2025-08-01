import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav>
        <div className="left">
             <Link to="/"><h2>Shopy</h2></Link>
        </div>
        <div className='search'>
            <input type="text" />
        </div>
        <div className="right">
          <Link to="/products/add">Add new Product</Link>
        </div>
    </nav>
  )
}

export default Navbar
