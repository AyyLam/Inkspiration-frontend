import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const Nav = (props) => {
  return (
      <div className="nav">
       {props.currentUser.name ?
        [
        <Link to='/pictures'>Explore Pictures</Link>,
        <Link to='/upload'>Upload Image</Link>,
        <Link to='/login'>Logout</Link>] :
        [<Link to='/login'>Login</Link>,
        <Link to='/about'>About</Link>,
        <Link to='/signup'>Sign Up</Link>]}
      </div>
    )

}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, null) (Nav);

// <Link to='/pictures'>{props.currentUser.name}'s Profile</Link>
