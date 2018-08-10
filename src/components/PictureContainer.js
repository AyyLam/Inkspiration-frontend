import React from "react";
import Picture from "./Picture";
import { connect } from 'react-redux'


class PictureContainer extends React.Component {
  componentDidMount () {
    this.props.getPictures()
  }

  render() {
    const renderPictures = this.props.pictures.map(picture => {
      return <Picture key={picture.id} picture={picture} />;
    };
    return(
      <div>
        <div className="App-logo">Inkspiration</div>
        <div>{renderPictures}</div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    pictures: state.pictures
  }
}

export default connect(mapStateToProps, null )(PictureContainer)
