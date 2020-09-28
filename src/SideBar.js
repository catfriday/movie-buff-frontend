import React from 'react'
import WatchList from './WatchList'
import './App.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from 'react-sidenav';
// import 'react-sidenav/dist/react-sidenav.css';

const SideBar = (props) => {
    return(
        <div>
            <SideNav
            onSelect={(selected) => {
                // Add your code here
            }}
        >
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                My Watchlist
            </NavText>
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Charts
            </NavText>
            <NavItem eventKey="charts/linechart">
                <NavText>
                    Line Chart
                </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
                <NavText>
                    Bar Chart
                </NavText>
            </NavItem>
        </NavItem>
    </SideNav.Nav>
</SideNav>
        


            <WatchList />

        </div>
    )
}

export default SideBar

