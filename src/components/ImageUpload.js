import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
// import { onImageDrop, loadUploadedUrl } from '../actions/index.js'
import { createPicture } from '../actions/index.js'
import { connect } from 'react-redux'

const CLOUDINARY_UPLOAD_PRESET = 'inkspirationAnt';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/ayylam/upload';



// export const handleImageUpload = (file) => {
//   let upload = request.post(CLOUDINARY_UPLOAD_URL)
//                         .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
//                         .field('file', file);
//
//     upload.end((err, response) => {
//       if (err) {
//         console.error(err);
//       }
//
//       if (response.body.secure_url !== '') {
//         this.props.loadUploadedUrl(response.body.secure_url)
//         };
//     });
//   }






class ImageUpload extends React.Component {

  state = {
      uploadedFile: [],
      uploadedFileCloudinaryUrl: "",
      title: "",
      username: "ANTHONY LAM"
    };

  handleImageUpload = (file) => {
      let upload = request.post(CLOUDINARY_UPLOAD_URL)
                            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                            .field('file', file);

        upload.end((err, response) => {
          if (err) {
            console.error(err);
          }

          if (response.body.secure_url !== '') {
            console.log(response.body.secure_url)
            this.setState({
              uploadedFileCloudinaryUrl: response.body.secure_url
            }, () => console.log(this.state.uploadedFileCloudinaryUrl))
          };
        });
      }

  onImageDrop = (files) =>  {
    console.log(files)
    this.setState({
      uploadedFile: files[0]
    }, () => console.log(this.state.uploadedFile))
    this.handleImageUpload(files[0]);
  }

  handleTitleChange = (e) => {
  this.setState({
    title: e.target.value
  })}

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createPicture({title: this.state.title, url: this.state.uploadedFileCloudinaryUrl, artist: this.state.username})
  }

    render() {
      return(
        <div>
          <div className="FileUpload">
            <form onSubmit={this.handleSubmit}>
              <label>Title</label>
              <input type="text" name="title" value={this.state.title} onChange={this.handleTitleChange}/>
                <Dropzone
                  multiple={false}
                  accept="image/*"
                  onDrop={this.onImageDrop}>
                  <p>Drop an image or click to select a file to upload.</p>
                </Dropzone>
              <input type="submit" value="Submit"/>
            </form>
          </div>
          <div>
            {this.state.uploadedFileCloudinaryUrl === '' ? null :
            <div>
              <p>{this.state.uploadedFile.name}</p>
              <img src={this.state.uploadedFileCloudinaryUrl} />
            </div>}
          </div>


        </div>
      )
    }
  }
//
//   const mapStateToProps = (state) => {
//     return {
//       uploadedFile: state.selectedPicture,
//       uploadedFileCloudinaryUrl: state.loading
//     }
//   }
//
  const mapDispatchToProps = (dispatch) => {
    return {
      createPicture: (data) => {dispatch(createPicture(data))},
    }
  }
//
export default connect(null, mapDispatchToProps)(ImageUpload);

//
// <div>
//   {this.state.uploadedFileCloudinaryUrl === '' ? null :
// <div>
//   <img src={this.state.uploadedFileCloudinaryUrl} />
// </div>}
// export default ImageUpload
