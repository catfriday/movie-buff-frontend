import React from 'react'
import MovieCard from './MovieCard'
import {Link} from 'react-router-dom'

const MoviePage = (props) => {


    return (
        <div>
            <Link to="/movies/new"> Add New Movie </Link><br></br>
            <Link to="/login"> Login </Link><br></br>
            <Link to="/signup"> Sign Up! </Link>
            {props.movies.map(movie => <MovieCard key={movie.id} movie={movie} addToWatchList={props.addToWatchList} history={props.history} currentUser={props.currentUser}/>)}
        </div>
    )
}

export default MoviePage