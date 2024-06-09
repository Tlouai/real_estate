import React, { createContext, useReducer, useContext, useEffect } from 'react';

const UserContext = createContext();

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      const user = {
        id: action.payload.id,
        firstname: action.payload.firstname
      };
      localStorage.setItem('user', JSON.stringify(user));
      return {
        ...state,
        user: user,
      };
    case 'LOGOUT':
      localStorage.removeItem('user');
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
