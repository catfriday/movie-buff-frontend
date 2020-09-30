import React from 'react'
import { Link }  from 'react-router-dom'


const WatchList = (props) => {
    // console.log(props.movie)
    return (
        <div>
            {props.watchlist.map(movie =>
            <div>
              <p>{movie.title}</p>
              <button onClick={() => props.delete(movie)}>Delete From Watchlist</button>
           </div>
                )} 
        </div>
    )
}

export default WatchList

