import React from 'react'
import { connect } from 'react-redux'
import { loginUser, logoutUser } from '../actions/index'
import { withRouter } from 'react-router-dom'

class LoginForm extends React.Component {

  state = {
      user: {
        username: "",
        password: ""
      }
  }

  componentDidMount() {
    localStorage.removeItem('token')
    this.props.logoutUser()
  }

  handleChangeUsername = (e) => {
    console.log(this.state.user)
    this.setState({
      user: {
        ...this.state.user, username: e.target.value
      }
    })
  }

  handleChangePassword = (e) => {
    console.log(this.state.user)
    this.setState({
      user: {
        ...this.state.user, password: e.target.value
      }
    })
  }

  handleSubmit = (e) => {
      e.preventDefault()
      this.props.loginUser(e.target.username.value, e.target.password.value)
      this.props.history.push("/pictures")
    }

  render () {
    return (
      <div className="loginform">
        <h3>Log In</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChangeUsername}/>
          <br/>
          <label>Password</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChangePassword}/>
          <br/>
          <input type="submit" value="Submit"/>
          </form>
      </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default withRouter(connect(mapStateToProps, {loginUser, logoutUser})(LoginForm))
