import React from 'react'
import WatchList from './WatchList'
import './App.css';
import { Link }  from 'react-router-dom'


const SideBar = (props) => {
    const handleClick = () =>{
        props.history.push({
            pathname:`/movies/watchlist`,
            movies: props.watchlistArray})
    }

    return(
        <div>
            {/* <button onClick={props.watchlistButton, handleClick}>See My Watch List</button> */}
            {/* <Link to="/movies/watchlist"> Show My Watchlist </Link> */}
            {/* <WatchList userMovie={props.userMovie}/> */}

        </div>
    )
}

export default SideBar

 