import React from "react";
import { selectPicture } from '../actions/index'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'


class Picture extends React.Component {

    render() {
      return(


          <Link to={"/pictures/" + this.props.picture.id} onClick={()=> this.props.selectPicture(this.props.picture)}>
            <div className="pictureItem">
            <img src={this.props.picture.url}/>
          <div className="overlay">
            <div className="text">{this.props.picture.title}</div>
          </div>
        </div>
        </Link>
      )
    }
}



const mapDispatchToProps = (dispatch) => {
  return {
    selectPicture: (data) => {dispatch(selectPicture(data))}
  }
}

export default connect(null, mapDispatchToProps)(Picture)
