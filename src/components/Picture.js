import React from "react";
import { selectPicture } from '../actions/index'
import { connect } from 'react-redux'


class Picture extends React.Component {

    render() {
      return(
        <div className="pictureItem">
          <img src={this.props.picture.url} onClick={()=> this.props.selectPicture(this.props.picture)}/>
          <div className="overlay">
            <div className="text">{this.props.picture.title}</div>
          </div>
        </div>
      )
    }
}



const mapDispatchToProps = (dispatch) => {
  return {
    selectPicture: (data) => {dispatch(selectPicture(data))}
  }
}

export default connect(null, mapDispatchToProps)(Picture)
