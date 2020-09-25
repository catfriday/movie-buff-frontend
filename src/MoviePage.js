import React from 'react'
import MovieCard from './MovieCard'

const MoviePage = (props) => {
    

    return (
        <div>
            {props.movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </div>
    )
}

export default MoviePage