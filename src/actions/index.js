export const getPictures = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/pictures')
    .then(resp => resp.json())
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

export const selectPicture = (picture) => {
  return {
    type: 'SELECT_PICTURE',
    payload: {
      picture
    }
  }
}
