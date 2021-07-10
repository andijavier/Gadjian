export const SET_DATA = 'data/setData'
export const SET_DATA_LOADING = 'dataLoading/setDataLoading'

export function setData (payload) {
  return { type: SET_DATA, payload: payload }
}
export function setDataLoading (payload) {
  return { type: SET_DATA_LOADING, payload: payload }
}

export function fetchData () {
  return function (dispatch) {
    dispatch(setDataLoading(true))
    fetch('https://randomuser.me/api/?results=28')
      .then(res => res.json())
      .then(res => {
        dispatch(setData(res.results))
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        dispatch(setDataLoading(false))
      })
  }
}