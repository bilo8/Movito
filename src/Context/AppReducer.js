const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_MyList":
      return {
        ...state,
        MyList: [action.payload, ...state.MyList],
      };
    case "REMOVE_MOVIE_FROM_MyList":
      return {
        ...state,
        MyList: state.MyList.filter((movie) => movie.id !== action.payload),
      };
    default:
      return state;
  }
};

export default AppReducer;
