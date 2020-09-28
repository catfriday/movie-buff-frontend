import React from 'react'
import { Link } from 'react-router-dom';
import ReactPlayer from "react-player"

const MovieShowPage = (props) => {
    console.log(props)
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
            <button onClick={props.addToWatchList}>Add Movie to Watchlist</button>

        </div>
    )
}


export default MovieShowPage