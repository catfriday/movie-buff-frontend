import React from 'react'

const MyMovies = (props) => {
    console.log(props)

    const handleClick = () =>{
            props.history.push({
                pathname:`/edit-my-movie`
               })
        }
    return(
        <div>
            {props.movies.map( movie => 
            
                <div>
                <p>{movie.title}</p>
                    <button onClick= {
                        () => {props.updateMyMovie(movie)
                    handleClick()
                    }
                    }>Update Movie</button>

                    <button onClick={
                        () => props.deleteMyMovie(movie)
                        }>Delete Movie</button>
                </div>
            

                )}
        

        </div>
      
    )
}

export default MyMovies