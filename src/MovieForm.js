import React from 'react'
import { Link }  from 'react-router-dom'

export default class MovieForm extends React.Component{

    handleSubmit = () => {
        console.log(this.props)
        this.props.history.push("/movies") 
    }

    render(){
        return(
          <div>
              <h1>{this.props.title}</h1>
              <form onSubmit={(e) => {
                  this.props.addMovie(e)
                  this.handleSubmit()
              }
              }>
                  Movie Title: <input type='text' placeholder='Movie Title' name='title' value={this.props.movie.title} onChange={(e) => this.props.updateMyMovie(e)} /><br></br><br></br>
                  Genre: <input type='text' placeholder='Genre' name='genre' value={this.props.movie.genre} onChange={(e) => this.props.updateMyMovie(e)} /><br></br><br></br>
                  Review: <input type='text' placeholder='Review'name='review' value={this.props.movie.review} onChange={(e) => this.props.updateMyMovie(e)} /><br></br><br></br>
                  Movie Poster: <input type='text' placeholder='Movie Poster Url' name='image' value={this.props.movie.image} onChange={(e) => this.props.updateMyMovie(e)} /><br></br><br></br>
                  Movie Trailer: <input type='text' placeholder='Trailer Url' name='video_link' value={this.props.movie.video_link} onChange={(e) => this.props.updateMyMovie(e)} /><br></br><br></br>
                  Movie Info: <input type='text' placeholder='Movie Info' name='movie_info' value={this.props.movie.movie_info} onChange={(e) => this.props.updateMyMovie(e)} /><br></br><br></br>
                  <input type='submit' value='Add Movie' /><br></br><br></br>
              </form>
              <Link to="/movies"> Show All Movies </Link> 
          </div>  
        )
    }

}