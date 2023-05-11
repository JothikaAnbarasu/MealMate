import React, { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/navbar_reducer";

const initialState = {
  isSidebarOpen: false,
  isLoginModalOpen: false,
  isSignUpModalOpen: false
}

const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: "open_sidebar" })
  }

  const closeSidebar = () => {
    dispatch({ type: "close_sidebar" })
  }

  const Login = () => {
    dispatch({ type: "log_in" })
  }

  const SignUp = () => {
    dispatch({ type: "sign_up" })
  }

  const closeModal = () => {
    dispatch({ type: "close_modal" })
  }


  return (
    <NavbarContext.Provider value={{ ...state, openSidebar, closeSidebar, Login, SignUp, closeModal }}>
      {children}
    </NavbarContext.Provider>
  )
}

export const useNavbarContext = () => {
  return useContext(NavbarContext)
}