const initialState = {
  user: "",
  pictures: [],
  selectedPicture: {},
  artist: {},
  loading: false
}

const reducer = (state = initialState, action) => {
  switch (action.type){
    case "LOAD_PICTURES":
    return {
      ...state, pictures: action.payload.pictures
    }

    case "SELECT_PICTURE":
    return {
      ...state, selectedPicture: action.payload.selectedPicture
    }

    case "LOGIN_HANDLE":
    return {
      ...state, user: action.payload.user
    }

    case "LOADING_TRUE":
    return {
      ...state, loading: action.payload.loading
    }

    case "LOADING_FALSE":
    return {
      ...state, loading: action.payload.loading
    }

    default:
    return state

  }
}

export default reducer
