import React, { useContext } from "react";
import { GlobalContext } from '../../Context/GlobalState';

import { FaTimes } from 'react-icons/fa';
import './MovieControls.css';

const MovieControls = ({ type, movie }) => {
  const {
    removeMovieFromMyList,
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "MyList" && (
        <>
          <button
            className="ctrl-btn"
             onClick={() => removeMovieFromMyList(movie.id)}
          >
           <FaTimes/>
          </button>
        </>
      )}

    </div>
  );
};

export default MovieControls;