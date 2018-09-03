export const createUser = (user) => {
  const baseUrl = 'http://localhost:3001/api/v1/'
  const artistUrl = 'http://localhost:3001/api/v1/artists'
  const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(user)
  }
  return (dispatch) => {
    fetch(artistUrl, options)
    .then(r => r.json())
    .then(result => {
      fetch(baseUrl + 'current_user', {
        headers: {
          'Content-Type': 'application/json',
          Accepts: 'application/json',
          Authorization: result.token
        }
      }).then(r => r.json())
        .then(user => {
          if (user === null) {
            return alert("Please fill out all fields.")
          } else {
              localStorage.setItem('token', result.token)
              dispatch({
                type: 'CREATE_USER',
                payload: {
                  currentUser: user
                }
              })
              return loadingFalse()
            }
          })
        })
    }
}


export const loginUser = (username, password) => {
  const baseUrl = 'http://localhost:3001/api/v1/'
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      username: username,
      password: password
    })
  }
  return (dispatch) => {
    //fetch to auth controller to get token
    fetch(baseUrl + 'auth', options)
    .then(res => res.json())
    .then(result => {
      //fetch to current user path
      fetch(baseUrl + 'current_user', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: result.token
        }
      }).then(r => r.json())
        .then(user => {
          if (user === null) {
            return alert('Incorrect email address or password')
          } else {
          localStorage.setItem('token', result.token)
          dispatch({
            type: 'GET_USER',
            payload: {
              currentUser: user
            }
          })
          }
        })
    })
  }
}

export const getPictures = () => {
  const baseUrl = 'http://localhost:3001/api/v1/pictures'
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
  const baseUrl = 'http://localhost:3001/api/v1/pictures/' + id
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
  const baseUrl = `http://localhost:3001/api/v1/artists/${input}`
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
