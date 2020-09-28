import React from 'react'
import { Link } from 'react-router-dom';
import ReactPlayer from "react-player"

const MovieShowPage = (props) => {
   
    let  {title, genre, review, image, video_link, movie_info, likes, dislikes } = props.location.movie

    return(

        <div>
            <h1>{title}</h1>
            <img src= {image} height="250px" width="200px"></img>
            <h3>{genre}</h3>
            <p> Movie Info:{movie_info}</p>
            <p>Review: {review}</p>
            <ReactPlayer
            url={video_link} /> 
            {/* <button onClick={() => props.addToWatchList(props.location.movie)}>Add Movie to Watchlist</button> */}
            {props.location.movie.user_id === props.currentUser.id ? 
         <p>Your Recomendation</p>
        :
        <button onClick={() => props.addToWatchList(props.movie)}>Add to My Watchlist</button>}

        </div>
    )
}


export default MovieShowPage