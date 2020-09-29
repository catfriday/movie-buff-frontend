import React from 'react'
import { Link }  from 'react-router-dom'


const WatchList = (props) => {
    console.log(props)
    return (
        <div>
            {props.watchlist.map(movie =>
            <div>
              <p>{movie.id}</p>
              {/* <button onClick={() => props.delete(props.movie)}>Delete From Watchlist</button> */}
           </div>
                )} 
        </div>
    )
}

export default WatchList

