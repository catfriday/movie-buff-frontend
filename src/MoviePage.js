import React from 'react'
import MovieCard from './MovieCard'
import {Link} from 'react-router-dom'
import WatchList from './WatchList'

const MoviePage = (props) => {
    
  

    return (
        <div>
            <div>
               


            </div>
            <Link to="/movies/new"> Add New Movie </Link><br></br>
            
            {props.movies.map(movie => <MovieCard key={movie.id} movie={movie} addToWatchList={props.addToWatchList} history={props.history} currentUser={props.currentUser} likes={props.likes} dislikes={props.dislikes}/>)}
        
        </div>
    )
}

export default MoviePage