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

   click = () =>{
    console.log('hey')
}

// changeHover =() => {
//     this.setState({
//         hover: !this.state.hover
//     })
// }

render(){

    let  {title, genre, review, image, video_link, movie_info, likes, dislikes } = this.props.movie




    
    return(
     <div  className='card'>
        <h3>{title}</h3> 
            <div className='image'>
            <img onClick={this.handleClick} src= {image} height="270px" width="200px"></img>
            </div>
           
                    <div class="likes-section">
                            <span >{`${this.props.movie.likes} Likes`}</span> 
                            <span className="likes introwrapper" onClick={() => this.props.likes(this.props.movie)} >&#127871;</span><br></br>
                            <span >{`${this.props.movie.dislikes} Dislikes`}</span>
                            <span className="likes introwrapper" onClick={() => this.props.dislikes(this.props.movie)}   >&#128530;</span>
                    </div>

                        <div>
                            {this.props.movie.user_id === this.props.currentUser.id ? 
                            <p>Your Recomendation</p>
                            :
                            <button onClick={() => this.props.addToWatchList(this.props.movie)}>Add to Watchlist</button>}
                        </div>
                
     </div>   
            
    
                
    )
}
}

export default MovieCard



   {/* <Link
                    to = {{
                        pathname:`/movies/${this.props.movie.id}`,
                        movie: this.props.movie
                    }}>See Movie Details
                </Link> */}
        
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
        

        // <div>
        //     {this.state.hover ? 
        // <video controls>
        //     <source src={video_link} />
        // </video>
        // :

        //  <img src={image} onMouseOver={this.changeHover}/>
        // }