
const navbar_reducer = (state, action) => {
  if (action.type === "open_sidebar") {
    return { ...state, isSidebarOpen: true }
  }

  if (action.type === "close_sidebar") {
    return { ...state, isSidebarOpen: false }
  }

  if (action.type === "sign_up") {
    return { ...state, isSidebarOpen: false, isLoginModalOpen: false, isSignUpModalOpen: true }
  }

  if (action.type === "log_in") {
    return { ...state, isSidebarOpen: false, isLoginModalOpen: true, isSignUpModalOpen: false }
  }

  if (action.type === "close_modal") {
    return { ...state, isSidebarOpen: false, isLoginModalOpen: false, isSignUpModalOpen: false }
  }
  return state;
}

export default navbar_reducer;