import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './Login.js';

const Profile = (props) => {
  console.log(props.currentUser)
  return (
    <div>
      {!props.currentUser.id ? <Login/> : null}

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, null)(Profile)

// <p>{props.currentUser.name}'s Profile Page</p>
