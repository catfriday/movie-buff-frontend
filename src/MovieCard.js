import React from 'react'
import ReactPlayer from "react-player"
import HoverVideoPlayer from 'react-hover-video-player';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';


class MovieCard extends React.Component  {

 state= {
     hover: false
 }

     handleClick = () =>{
      this.props.history.push({
          pathname:`/movies/${this.props.movie.id}`,
        movie: this.props.movie})
  }

// changeHover =() => {
//     this.setState({
//         hover: !this.state.hover
//     })
// }

render(){

    let  {title, genre, review, image, video_link, movie_info, likes, dislikes } = this.props.movie

    return(
        

        // <div>
        //     {this.state.hover ? 
        // <video controls>
        //     <source src={video_link} />
        // </video>
        // :

        //  <img src={image} onMouseOver={this.changeHover}/>
        // }



     <div onClick={this.handleClick}>
        <h1>{title}</h1> 
           <img src= {image} height="250px" width="200px"></img>
           {this.props.movie.user_id === this.props.currentUser.id ? 
         <p>Your Recomendation</p>
        :
        <button onClick={() => this.props.addToWatchList(this.props.movie)}>Add to Watchlist</button>}
           
        {/* <Link
            to = {{
                pathname:`/movies/${this.props.movie.id}`,
                movie: this.props.movie
            }}>See Movie Details
        </Link> */}
        </div> 
        
        //    <ReactPlayer
        //     url={video_link} /> 

        //      <iframe src={video_link}
                
        //     </iframe> 



        //     {/* <video
        //         poster={image}
        //         onMouseOver={event => event.target.play()}
        //         onMouseOut={event => event.target.pause()}
        //         src={video_link} >
        //     </video> */}


        //     {/* <HoverVideoPlayer
        //         videoSrc={video_link}
        //         pausedOverlay={
        //             <img src={image} alt=""/>
        //         }
        //         loadingOverlay={
        //             <div className="loading-spinner-overlay" />
        //         }
        //     /> */}
           
      
        //    {/* <video>
        //        <source src={video_link}>
              
        //    </video> */}
        
    )
}
}

export default MovieCard



   