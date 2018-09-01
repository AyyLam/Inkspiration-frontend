import React from 'react'
import { connect } from 'react-redux'
import { createUser, loadingTrue, loadingFalse } from '../actions/index'
import { withRouter } from 'react-router-dom'



class SignUp extends React.Component {

  state = {
      user: {
        name: "",
        username: "",
        password: ""
      }
  }

  handleChange = (e) => {
    console.log(this.state.user)
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value,
        [e.target.username]: e.target.value,
        [e.target.password]: e.target.value
      }
    }, () => this.props.loadingTrue())
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createUser(this.state.user)
    console.log(this.props.loading);
    if (this.props.loading){
      console.log('Loading')
    } else {
      console.log(this.props.currentUser);
      this.props.history.push("/user")
    }

  }


  render () {
    console.log('Loading?:', this.props.loading)
    return (
      <div className="loginform">
        <h3>Sign Up</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
          <br/>
          <label>Username</label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
          <br/>
          <label>Password</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
          <br/>
          <br/>
          <input type="submit" value="Submit"/>
          </form>
      </div>
      )
  }


}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    loading: state.loading
  }
}


export default withRouter(connect(mapStateToProps, {createUser, loadingTrue, loadingFalse} )(SignUp))
