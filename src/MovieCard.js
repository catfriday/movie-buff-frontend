import React from 'react'
import ReactPlayer from "react-player"
import HoverVideoPlayer from 'react-hover-video-player';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';
import { Card, Icon, Image, Button } from "semantic-ui-react";


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
     <div className="card" >
          {/* <Card min-width>
            <Image
            src={image}
            wrapped
            ui={false}
            />
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>Joined in 2016</Card.Meta>
                <Card.Description>
                    Daniel is a comedian living in Nashville.
                </Card.Description>
           </Card.Content>
        <Card.Content extra>
                <Button as="div" labelPosition="center">
                    <Button color="black">
                    <Icon name="heart" />
                    Like
                </Button>
        
            </Button>
       </Card.Content>
        </Card>  */}



        <h2>{title}</h2> 
           <img onClick={this.handleClick} src= {image} height="200px" width="175px"></img>
           <div className="myDIV">
                <div className="hide">

                     <div class="likes-section">
                                <span className="likes">{`${this.props.movie.likes} Likes`}</span><br/>
                                <span onClick={() => this.props.likes(this.props.movie)} className="like-button">&#127871;</span><br></br>
                                <span className="likes">{`${this.props.movie.dislikes} Dislikes`}</span>
                                <span onClick={() => this.props.dislikes(this.props.movie)}  className="like-button" >&#128530;</span>
                        </div>
                            {this.props.movie.user_id === this.props.currentUser.id ? 
                            <p>Your Recomendation</p>
                            :
                            <button onClick={() => this.props.addToWatchList(this.props.movie)}>Add to Watchlist</button>}
                        </div>
                    
            </div>
    </div> 
                
    )
}
}

export default MovieCard



   