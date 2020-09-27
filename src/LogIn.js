import React from 'react'


const LogIn = (props) => {

    return(
        <div>
            <h3>Log In Here</h3>
            <form onSubmit={(e)=> props.logIn(e)}>
                <label>Username:</label> 
                <input type='text' name='username'/><br/>
                <label>Password:</label>
                <input type='text' name='password'/><br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default LogIn