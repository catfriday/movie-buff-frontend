import React from 'react'
import { Link } from 'react-router-dom';
import ReactPlayer from "react-player"
import YouTube from '@u-wave/react-youtube';

const MovieShowPage = (props) => {
   
    // let  {title, genre, review, image, video_link, movie_info, likes, dislikes } = props.location.movie

    return(

     <div className='movie-show'>
        <h1>{props.location.movie.title}</h1>
            {/* <ReactPlayer url={props.location.movie.video_link} className='trailer'/>  */}
            <YouTube
                video={props.location.movie.video_link}
                autoplay
                />
                <img src= {props.location.movie.image} height="250px" width="200px"></img>
                    <h3>{props.location.movie.genre}</h3>
                        <p> Movie Info:{props.location.movie.movie_info}</p>
                             <p>Review: {props.location.movie.review}</p>
            {/* <button onClick={() => props.addToWatchList(props.location.movie)}>Add Movie to Watchlist</button> */}
            {props.location.movie.user_id === props.currentUser.id ? 
         <p>Your Recomendation</p>
        :
            <button onClick={() => props.addToWatchList(props.location.movie)}>
                Add to My Watchlist
            </button>}<br></br>

            <span >
                {`${props.location.movie.likes} Likes`}
            </span> 
            <span className="likes introwrapper" onClick={() => this.props.likes(this.props.movie)}>
                &#127871;
            </span>

            <span >
                {`${props.location.movie.dislikes} Dislikes`}
            </span>
            <span className="likes introwrapper" onClick={() => this.props.dislikes(this.props.movie)}>
                &#128530;
            </span>

    </div>
    )
}


export default MovieShowPage