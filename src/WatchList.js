import React from 'react'
import { Link }  from 'react-router-dom'


const WatchList = (props) => {
    console.log(props)
    return (
        <div>
            {props.watchlist.map(movie =>
              <p>movie.title</p>
                )} 
           
        </div>
    )
}

export default WatchList

