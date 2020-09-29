import React from 'react'

const MyMovies = (props) => {
    return(
        <div>
            {props.movies.map( movie => 
            
                <div>
                <p>{movie.title}</p>
                    <button>Update Movie</button>
                    <button onClick={() => props.deleteMyMovie(movie)}>Delete Movie</button>
                </div>
            

                )}
        

        </div>
      
    )
}

export default MyMovies