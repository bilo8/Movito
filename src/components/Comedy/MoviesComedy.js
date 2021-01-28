import React, { useState, useEffect } from "react";

import axios from "axios";

import Results from "./Results";
import Popup from "../PopUp/Popup";

const MoviesComedy = () => {
  const [state, setState] = useState({
    results: [],
    selected: {},
  });
  const apiurl = "http://www.omdbapi.com/?apikey=dfe6d885&s=comedy";

  const getMovieRequest = async () => {
    axios(apiurl).then(({ data }) => {
      let results = data.Search;

      setState((prevState) => {
        return { ...prevState, results: results };
      });
    });
  };

  useEffect(() => {
    getMovieRequest();
  }, []);


  const url = "http://www.omdbapi.com/?apikey=dfe6d885";

  const openPopup = (id) => {
    axios(url + "&i=" + id)
    .then(({ data }) => {
      let result = data;

      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };

  const closePopup = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div>
      <main>
        <Results results={state.results} openPopup={openPopup} />

        {typeof state.selected.Title != "undefined" ? (
          <Popup selected={state.selected} closePopup={closePopup} />
        ) : (
          false
        )}
      </main>
    </div>
  );
};

export default MoviesComedy;
