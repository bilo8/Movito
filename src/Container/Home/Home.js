import React from 'react';

import Movies from '../../components/Action/Movies';
import MoviesComedy from '../../components/Comedy/MoviesComedy';
import MoviesCrime from '../../components/Crime/MoviesCrime';


 const Home = () => {
    return (
        <div>
            <Movies />
            <MoviesComedy />
            <MoviesCrime />
        </div>
    )
}

export default Home;

