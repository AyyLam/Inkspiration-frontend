const initialState = {
  pictures: [],
  selectedPicture: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type){
    case "LOAD_PICTURES":
    return {
      ...state, pictures: action.payload.pictures
    }

    case "SELECT_PICTURE":
    return {
      ...state, selectedPicture: action.payload.picture
    }

    default:
    return state

  }
}

export default reducer
