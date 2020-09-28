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
              <h1>Add a Movie!</h1>
              <form onSubmit={(e) => {
                  this.props.addMovie(e)
                  this.handleSubmit()
              }
              }>
                  Movie Title: <input type='text' placeholder='Movie Title' /><br></br><br></br>
                  Genre: <input type='text' placeholder='Genre' /><br></br><br></br>
                  Review: <input type='text' placeholder='Review' /><br></br><br></br>
                  Movie Poster: <input type='text' placeholder='Movie Poster Url' /><br></br><br></br>
                  Movie Trailer: <input type='text' placeholder='Trailer Url' /><br></br><br></br>
                  Movie Info: <input type='text' placeholder='Movie Info' /><br></br><br></br>
                  <input type='submit' value='Add Movie' /><br></br><br></br>
              </form>
              <Link to="/movies"> Show All Movies </Link> 
          </div>  
        )
    }

}