import React from 'react'
import { connect } from 'react-redux'
import { loginHandle } from '../actions/index'

class LoginForm extends React.Component {

  render () {
    return (
      <div className="loginform">
        <h3>Log In</h3>
        <form >
          <label>Username</label>
          <input type="text" value={this.props.user} onChange={this.props.loginHandle}/>
          <br/>
          <label>Password</label>
          <input type="password"/>
          <br/>
          <input type="submit" value="Submit"/>
          </form>
      </div>
      )
  }
  // handleSubmit = (e) => {
  //     e.preventDefault()
  //     this.props.handleLogin(this.state.username)
  //   }


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

export default connect(mapStateToProps, mapDispatchToProps )(LoginForm)
