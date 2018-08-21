import React from "react";
import Picture from "./Picture";
import { connect } from 'react-redux'
import { getPictures} from '../actions'


class PictureContainer extends React.Component {
  componentDidMount () {
    this.props.getPictures()
  }

renderPictures = () => this.props.pictures.map(picture => {
    return <Picture key={picture.id} picture={picture} />
  });
  render() {
    return(
      <div className="App-pics-list">
        <div className="pictures-list">
          {this.renderPictures()}
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    pictures: state.pictures
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getPictures: (data) => {dispatch(getPictures(data))}
//   }
// }


export default connect(mapStateToProps, {getPictures})(PictureContainer)
