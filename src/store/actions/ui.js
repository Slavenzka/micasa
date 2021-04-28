import { TOGGLE_MODAL, TOGGLE_MODAL_LOADING_STATE } from 'store/actions/actionTypes'

export const toggleModal = (content, options) => {
  return {
    type: TOGGLE_MODAL,
    payload: {
      content,
      options
    }
  }
}

export const toggleModalLoadingState = status => ({
  type: TOGGLE_MODAL_LOADING_STATE,
  payload: status
})
