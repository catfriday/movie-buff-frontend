import React from 'react'
import headerPhoto from './headerPhoto.png'

const Header = (props) => {
    return(
        <div>

                <div id="horoscope-header">
                <img id='logo' src={headerPhoto}  className="marginauto" alt="centered image"></img>
                </div>

        </div>
    )
}

export default Header