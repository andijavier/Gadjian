import {
  SET_DATA,
  SET_DATA_LOADING
} from './action'

const initialState = {
  data: [],
  dataLoading: false
}

function reducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_DATA:
      return { ...state, data: payload }
    case SET_DATA_LOADING:
      return { ...state, dataLoading: payload }
    default:
      return state
  }
}

export default reducer