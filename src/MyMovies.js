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
            
            <div  className='card'>
                     <h3 className='movie-title'>{movie.title}</h3> 
                <div className='image'>
                        <img className='movie-poster'   src= {movie.image} height="340px" width="265px"></img>
                </div>

                <div class="likes-section">
                    <span className='likes-name'>{`${movie.likes} Likes`}</span> 
                    <span className="likes introwrapper"  >&#127871;</span><br></br>
                    <span className='likes-name'>{`${movie.dislikes} Dislikes`}</span>
                    <span className="likes introwrapper" >&#128530;</span>
                 </div>

                    <div>
                        <p className='delete' onClick= {
                            () => {props.updateMyMovie(movie)
                             handleClick()
                                }}>Update Movie</p>

                        <p className='delete' onClick={
                            () => props.deleteMyMovie(movie)
                                }>Delete Movie</p>
                    </div>
                </div>

                )}
        

        </div>
      
    )
}

export default MyMovies

{/* <div  className='card'>
                <h3 className='movie-title'>{movie.title}</h3> 
                    <div className='image'>
                        <img  src= {movie.image} height="270px" width="200px"></img>
                    </div>
                    <div class="likes-section">
                        <span className='likes-name'>{`${movie.likes} Likes`}</span> 
                        <span className="likes introwrapper"  >&#127871;</span><br></br>
                        <span className='likes-name'>{`${movie.dislikes} Dislikes`}</span>
                        <span className="likes introwrapper" >&#128530;</span>
                     </div>

                    <div>
                        <p onClick= {
                            () => {props.updateMyMovie(movie)
                             handleClick()
                                }}>Update Movie</p>

                    <p onClick={
                            () => props.deleteMyMovie(movie)
                                }>Delete Movie</p>
                    </div> */}