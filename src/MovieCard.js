import React from 'react'
import ReactPlayer from "react-player"
import HoverVideoPlayer from 'react-hover-video-player';


const MovieCard = (props) => {
  let  {title, genre, review, image, video_link, movie_info, likes, dislikes } = props.movie

    return(
        <div>
        <div>
        <h1>{title}</h1> 
           <img src= {image} height="250px" width="200px"></img>
           <button onClick={() => props.addToWatchList(props.movie)}>Add to Watchlist</button>

        </div>
           {/* <ReactPlayer
            url={video_link} /> */}


            {/* <video
                poster={image}
                onMouseOver={event => event.target.play()
                .then(resp => console.log(resp))}
                onMouseOut={event => event.target.pause()}
                src={video_link} >
            </video> */}


            {/* <HoverVideoPlayer
                videoSrc={video_link}
                pausedOverlay={
                    <img src={image} alt=""/>
                }
                loadingOverlay={
                    <div className="loading-spinner-overlay" />
                }
            /> */}
           
      
           {/* <video>
               <source src={video_link}>
              
           </video> */}
        </div>
    )
}

export default MovieCard



   