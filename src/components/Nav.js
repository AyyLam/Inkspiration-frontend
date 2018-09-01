import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const Nav = (props) => {
  return (
      <div className="nav">
       Welcome {props.currentUser.name}
        <Link to='/pictures'>Pictures</Link>
        <Link to='/login'>Login</Link>
        <Link to='/about'>About</Link>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/upload'>Upload Image</Link>
      </div>
    )

}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, null) (Nav);
