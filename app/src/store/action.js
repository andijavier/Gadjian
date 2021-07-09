export const SET_INFO = 'info/setInfo'
export const SET_INFO_ERR = 'infoErr/setInfoErr'
export const SET_INFO_LOADING = 'infoLoading/setInfoLoading'

export function setInfo(payload) {
  return { type: SET_INFO, payload: payload }
}
export function setInfoErr(payload) {
  return { type: SET_INFO_ERR, payload: payload }
}
export function setInfoLoading(payload) {
  return { type: SET_INFO_LOADING, payload: payload }
}

export function fetchInfo() {
  return function (dispatch) {
    dispatch(setInfoLoading(true))
    fetch(`https://randomuser.me/api/?results=28`)
    .then(res => res.json())
    .then(response => {
      dispatch(setInfo(response.results))
    })
    .catch(err => {
      console.error(err);
    })
    .finally(() => {
      dispatch(setInfoLoading(false))
    })
  }
}