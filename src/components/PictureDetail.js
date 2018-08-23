import React from "react";
import { connect } from 'react-redux'
import { getOnePicture } from '../actions/index.js'
import ImageUpload from './ImageUpload.js';

class PictureDetail extends React.Component {

  componentDidMount() {
    if (!this.props.selectedPicture.title){
      this.props.getOnePicture(this.props.id)
    }
  }

  render(){
    console.log("loading? ", this.props.loading)

      if(this.props.loading) {
        return(<img src='https://media1.tenor.com/images/033dafc252262f1142e74f14c54a7257/tenor.gif?itemid=5447006'/>
      )} else{
      return(<div className="App-pic">
        <div className="picture-detail-item">
          <img src={this.props.selectedPicture ? this.props.selectedPicture.url : null}/>
        </div>

        <div className="picture-detail-artist">
          <h1>{this.props.selectedPicture ? this.props.selectedPicture.title : null}</h1>
          <br/>
          <h2>Artist: {this.props.selectedPicture.artist ? this.props.selectedPicture.artist.name : null}</h2>
        </div>
      </div>
    )}
  }

}

const mapStateToProps = (state) => {
  return {
    selectedPicture: state.selectedPicture,
    loading: state.loading
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getOnePicture: (data) => {dispatch(getOnePicture(data))}
//   }
// }

export default connect(mapStateToProps, {getOnePicture})(PictureDetail)
