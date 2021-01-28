import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  MyList: localStorage.getItem("MyList")
    ? JSON.parse(localStorage.getItem("MyList"))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("MyList", JSON.stringify(state.MyList));
  }, [state]);

  // actions
  const addMovieToMyList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_MyList", payload: movie });
  };

  const removeMovieFromMyList = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_MyList", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        MyList: state.MyList,
        addMovieToMyList,
        removeMovieFromMyList,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
