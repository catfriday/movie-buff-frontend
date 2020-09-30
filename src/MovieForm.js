import React from 'react'
import { Link }  from 'react-router-dom'

export default class MovieForm extends React.Component{

    handleSubmit = () => {
        console.log(this.props)
        this.props.history.push("/movies") 
    }

    render(){
        return(
          <div className='form'>
              <h1>{this.props.title}</h1>
              <form  onSubmit={(e) => {
                  this.props.addMovie(e)
                  this.handleSubmit()
              }
              }>
                   <input type='text' placeholder='Movie Title' name='title'  /><br></br><br></br>
                   <input type='text' placeholder='Genre' name='genre'  /><br></br><br></br>
                   <input type='text' placeholder='Review'name='review'  /><br></br><br></br>
                   <input type='text' placeholder='Movie Poster Url' name='image'  /><br></br><br></br>
                   <input type='text' placeholder='Trailer Url' name='video_link'  /><br></br><br></br>
                   <input type='text' placeholder='Movie Info' name='movie_info'  /><br></br><br></br>
                  <input type='submit' value='Add Movie' /><br></br><br></br>
              </form>
              <Link to="/movies"> Show All Movies </Link> 
          </div>  
        )
    }

}