import React from 'react'
import WatchList from './WatchList'
import MyMovies from './MyMovies'
import './App.css';
import { Link }  from 'react-router-dom'


const SideBar = (props) => {
    // const handleClick = () =>{
    //     props.history.push({
    //         pathname:`/movies/watchlist`,
    //         movies: props.watchlistArray})
    // }

    return(
        <div>
            {/* <button onClick={props.watchlistButton, handleClick}>See My Watch List</button> */}
            <Link to="/movies/watchlist"> Show My Watchlist </Link><br></br>
            <Link to="/my-movies"> Show My Movies </Link>
          
        
        </div>
    )
}

export default SideBar

 