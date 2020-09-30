import React from 'react'
import WatchList from './WatchList'
import MyMovies from './MyMovies'
import './App.css';
import { Link }  from 'react-router-dom'
import {
    Checkbox,
    Grid,
    Header,
    Icon,
    Image,
    Segment,
    Sidebar,
  } from 'semantic-ui-react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';


const SideBar = (props) => {
     
    // const {pathname} = props.location;
    // if(pathname === "/home") {
    //     return null;
    // }

    return(
        <ProSidebar classNmae='item2'>
            <Menu iconShape="square">
                {/* <MenuItem >Dashboard</MenuItem> */}
                <SubMenu title="Menu" >
                <MenuItem>
                    My Posted Movies
                    <Link to="/my-movies"/>
                </MenuItem>
                <MenuItem>
                    My Watchlist
                    <Link to="/my-movies"/>
                </MenuItem>
                <MenuItem>
                    Add A Movie
                    <Link to="/movie/new"/>
                </MenuItem>
                </SubMenu>
            </Menu>
        </ProSidebar>
    )
}

export default SideBar
{/* <Link to="/movies/new"> Add New Movie </Link><br></br> */}
{/* <MenuItem >
  Dashboard
  <Link to="/" />
</MenuItem>; */}

{/* <div>
            
{/* <button onClick={props.watchlistButton, handleClick}>See My Watch List</button> */}
{/* <Link to="/movies/watchlist"> Show My Watchlist </Link><br></br>
<Link to="/my-movies"> Show My Movies </Link>


</div>  */}