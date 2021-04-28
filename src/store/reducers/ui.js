import { TOGGLE_MODAL, TOGGLE_MODAL_LOADING_STATE } from 'store/actions/actionTypes'
import { updateObject } from 'utils'

const initialState = {
  isSidebarCollapsed: false,
  modal: {
    content: null,
    options: {
      isLoading: false
    },
  },
}

export function uiReducer (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return updateObject(state, { modal: {
          content: action.payload.content,
          options: action.payload.options
        }})
    case TOGGLE_MODAL_LOADING_STATE:
      const optionsCopy = updateObject(state.modal.options, {isLoading: action.payload})
      const modalCopy = updateObject(state.modal, {options: optionsCopy})
      return updateObject(state, {modal: modalCopy})

    default: return state
  }
}
