import React from 'react'
import { Link, Redirect } from 'react-router-dom'


const Nav = (props) => {
  return (
      <div className="nav">
        <Link to='/pictures'>Pictures</Link>
        <p>Login</p>
        <p>Sign Up</p>
      </div>
    )

}

export default Nav;
