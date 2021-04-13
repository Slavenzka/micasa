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
    default: return state
  }
}
