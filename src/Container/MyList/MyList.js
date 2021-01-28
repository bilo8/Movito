import React, { useContext } from "react";
import { GlobalContext } from '../../Context/GlobalState';
import MovieCard from '../../components/MovieCard/MovieCard';

import './MyList.css';

const MyList = () => {
  const { MyList } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My MyList</h1>

          <span className="count-pill">
            {MyList.length} {MyList.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {MyList.length > 0 ? (
          <div className="movie-grid">
            {MyList.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="MyList" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};

export default MyList;