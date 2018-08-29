export const getPictures = () => {
  const baseUrl = 'https://inkspiration.herokuapp.com/api/v1/pictures'
  return (dispatch) => {
    fetch(baseUrl)
    .then(r => r.json())
    .then(result => {
      dispatch({
        type: 'LOAD_PICTURES',
        payload: {
          pictures: result
        }
      })
    })
  }
}
export const getOnePicture = (id) => {
  const baseUrl = 'https://inkspiration.herokuapp.com/api/v1/pictures/' + id
  return (dispatch) => {
    dispatch( loadingTrue() )
    fetch(baseUrl)
    .then(r => r.json())
    .then(result => {
      dispatch(
        selectPicture(result)
      )
      dispatch( loadingFalse() )
    })
  }
}


export const getArtist = (input) => {
  const baseUrl = `https://inkspiration.herokuapp.com/api/v1/artists/${input}`
  return (dispatch) => {
    fetch(baseUrl)
    .then(r => r.json())
    .then(artistData => {
      dispatch({
        type: 'GET_ARTIST',
        payload: {
          artist: artistData
        }
      })
    })
  }
}

// export const createPicture = (input) => {
//   const baseUrl = 'https://inkspiration.herokuapp.com/api/v1/pictures'
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//       Accept: 'application/json'
//     },
//     body: JSON.stringify(input)
//     }
//   return (dispatch) => {
//     fetch(baseUrl, options)
//     .then(r => r.json())
//     .then(result => {
//       dispatch({
//         type: 'CREATE_PICTURE',
//         payload: {
//           picture: result
//         }
//       })
//     })
//   }
// }

export const selectPicture = (picture) => {
  return {
    type: 'SELECT_PICTURE',
    payload: {
      selectedPicture: picture
    }
  }
}

export const loginHandle = (user) => {
  return {
    type: 'LOGIN_HANDLE',
    payload: {
      user: user
    }
  }
}
export const loadingTrue = () => {
  return {
    type: 'LOADING_TRUE',
    payload: {
      loading: true
    }
  }
}
export const loadingFalse = () => {
  return {
    type: 'LOADING_FALSE',
    payload: {
      loading: false
    }
  }
}

export const onImageDrop = (files) => {
  console.log('HEY IMAGE DROPPED')
  return {
    type: 'UPLOAD_FILE',
    payload: {
      uploadedFile: files[0]
    }
  }
  // this.handleImageUpload(files[0])
}

export const loadUploadedUrl = (url) => {
  return {
    type: 'LOAD_UPLOAD_URL',
    payload: {
      cloudinaryUrl: url
    }
  }
}
