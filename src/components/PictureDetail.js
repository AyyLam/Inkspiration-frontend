import React from "react";
import { connect } from 'react-redux'

class PictureDetail extends React.Component {


  render(){
    return(
      <div>
        <div>{this.props.selectedPicture.title}</div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    selectedPicture: state.selectedPicture
  }
}

export default connect(mapStateToProps, null )(PictureDetail)
