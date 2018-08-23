import React from 'react'
import { Link, Redirect } from 'react-router-dom'


const Nav = (props) => {
  return (
      <div className="nav">
        <Link to='/pictures'>Pictures</Link>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/upload'>Upload Image</Link>
      </div>
    )

}

export default Nav;
