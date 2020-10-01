import React from 'react'
import { Link }  from 'react-router-dom'


const WatchList = (props) => {
    // console.log(props.movie)

    const handleImageClick = (movie) =>{
        console.log(movie)
         props.history.push({
             pathname:`/movies/${movie.id}`,
             movie: movie})
     }

    return (
        <div>
            {props.watchlist.map(movie =>
            <div  className='card'>
                <h3 className='movie-title'>{movie.title}</h3> 
                    <div className='image'>
                        <img onClick={() => handleImageClick(movie)} className='movie-poster'  src= {movie.image} height="340px" width="265px"></img>
                    </div>
                    <div class="likes-section">
                        <span className='likes-name'>{`${movie.likes} Likes`}</span> 
                        <span className="likes introwrapper"  >&#127871;</span><br></br>
                        <span className='likes-name'>{`${movie.dislikes} Dislikes`}</span>
                        <span className="likes introwrapper" >&#128530;</span>
                     </div>

                    <div>
                        <p className='watchlist' onClick={() => props.delete(movie)}>Delete From Watchlist</p>
                    </div>
                
        </div>    
                )} 
        </div>
    )
}

export default WatchList

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
                             <button onClick={() => props.delete(movie)}>Delete From Watchlist</button>
                        </div>
                
     </div>    */}