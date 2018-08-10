import React from "react";
import { selectPicture } from '../actions/index'
import { connect } from 'react-redux'


class Picture extends React.Component {

    render() {
      return(
        <div>
          <div className="App-logo">Inkspiration</div>
          <button onClick={()=> this.props.selectPicture(props.picture)}></button>
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
