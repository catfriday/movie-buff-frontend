import React from 'react'
import WatchList from './WatchList'
import MyMovies from './MyMovies'
import './App.css';
import { Link }  from 'react-router-dom'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';



const SideBar = (props) => {
    // const handleClick = () =>{
    //     props.history.push({
    //         pathname:`/movies/watchlist`,
    //         movies: props.watchlistArray})
    // }

    return(
        <div className='item2'>
            {/* <button onClick={props.watchlistButton, handleClick}>See My Watch List</button> */}
            {/* <Link to="/movies/watchlist"> Show My Watchlist </Link><br></br>
            <Link to="/my-movies"> Show My Movies </Link> */}
        <ProSidebar className='item2'>
            <Menu iconShape="square">
                {/* <MenuItem >Dashboard</MenuItem> */}
                <SubMenu title="Menu" >
                <MenuItem>
                    My Posted Movies
                    <Link to="/my-movies"/>
                </MenuItem>
                <MenuItem>
                    My Watchlist
                    <Link to="/movies/watchlist"/>
                </MenuItem>
                <MenuItem>
                    Add A Movie
                    <Link to="/movies/new"/>
                </MenuItem>
                <MenuItem>
                    All Movies
                    <Link to="/movies"/>
                </MenuItem>
                </SubMenu>
            </Menu>
        </ProSidebar>
        
        </div>
    )
}

export default SideBar

 