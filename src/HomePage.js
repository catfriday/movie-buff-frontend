import React from 'react'
import {Link} from 'react-router-dom'


const HomePage = (props) => {
    return (
        <div>

            <Link to="/login"> Login </Link><br></br>
            <Link to="/signup"> Sign Up! </Link>

        </div>
    )
}

export default HomePage 