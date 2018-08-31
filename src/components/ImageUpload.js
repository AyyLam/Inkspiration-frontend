import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { connect } from 'react-redux'
import { loadingTrue, loadingFalse } from '../actions/index.js'


const CLOUDINARY_UPLOAD_PRESET = 'inkspirationAnt';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/ayylam/upload';


class ImageUpload extends React.Component {

  state = {
      uploadedFile: [],
      uploadedFileCloudinaryUrl: "",
      title: "",
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
            }, () => this.props.loadingFalse())
          };
        });
      }

  onImageDrop = (files) =>  {
    this.props.loadingTrue()

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

  createPicture = (input) => {
    const baseUrl = 'http://localhost:3001/api/v1/pictures'
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(input)
      }
    return(
      fetch(baseUrl, options)
      .then(r => r.json())
      .then((r)=> console.log("Picture created:", r))
    )
  }


  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.uploadedFileCloudinaryUrl, this.state.title)
    if(this.state.uploadedFileCloudinaryUrl && this.state.title) {
      this.createPicture({title: this.state.title, url: this.state.uploadedFileCloudinaryUrl, artist_id: this.props.user.id})
      alert("Upload successful!")
    } else {
      alert("Missing title/image")
    }
    this.setState({
      title: "",
      uploadedFile: [],
      uploadedFileCloudinaryUrl: "",
    })
  }



    render() {
      console.log('Loading?:', this.props.loading)
      return(
        <div>
          <div className="FileUpload">
            {this.props.loading ? <img  className="loadingUpload" src={require('../loading.gif')}/> :
            <form onSubmit={this.handleSubmit}>
              <label>Title</label>
              <input type="text" name="title" value={this.state.title} onChange={this.handleTitleChange}/>
                 <Dropzone
                  className="dropzone"
                  multiple={false}
                  accept="image/*"
                  onDrop={this.onImageDrop}>
                  <p>Drop Image</p>
                  <p>OR</p>
                  <p>Click To Upload</p>
                </Dropzone>
              <input type="submit" value="Submit"/>
            </form>}
          </div>
          <div>
            {this.state.uploadedFileCloudinaryUrl === '' ? null :
            <div id="uploaded">
              <img className="previewImage" src={this.state.uploadedFileCloudinaryUrl} />
              Preview
            </div>}
          </div>
        </div>
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
      user: state.user,
      loading: state.loading
    }
  }


export default connect(mapStateToProps, {loadingTrue, loadingFalse})(ImageUpload);
