import React from 'react'
import { connect } from 'react-redux'
import { loginHandle } from '../actions/index'



class SignUp extends React.Component {

  render () {
    return (
      <div className="loginform">
        <h3>Sign Up</h3>
        <form >
          <label>Name</label>
          <input type="text" value={this.props.user.name} onChange={this.props.loginHandle}/>
          <br/>
          <label>Username</label>
          <input type="text" value={this.props.user.username} onChange={this.props.loginHandle}/>
          <br/>
          <label>Password</label>
          <input type="password"/>
          <br/>
          <br/>
          <label>Location</label>
          <input type="text" value={this.props.user.location}/>
          <br/>
          <label>Description</label>
          <input type="text" value={this.props.user.bio }/>
          <br/>

          <input type="submit" value="Submit"/>
          </form>
      </div>
      )
  }


}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginHandle: (data) => {dispatch(loginHandle(data))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(SignUp)
