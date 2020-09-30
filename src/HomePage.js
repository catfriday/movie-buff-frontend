import React from 'react'
import {Link} from 'react-router-dom'


const HomePage = (props) => {
    return (
        <div>

            {/* <Link className='link' to="/login" style={{ color:'black', textDecoration: 'none' }}> Login </Link><br></br>
            <Link to="/signup" style={{ color:'black', textDecoration: 'none' }}> Sign Up! </Link> */}
            <button
                        type="button"
                        onClick={(e) => {
                        e.preventDefault();
                        window.location.href='/login';
                        }}
                > Login</button>
            
            <button
                        type="button"
                        onClick={(e) => {
                        e.preventDefault();
                        window.location.href='/login';
                        }}
                > Sign Up!</button>
        </div>
    )
}

export default HomePage 