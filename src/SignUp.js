import React from 'react'

const SignUp = (props) => {

    return(
        <div>
            <h3>Sign Up Here</h3>
            <form onSubmit={(e)=> props.createUser(e)}>
                <label>Username:</label> 
                <input type='text' name='username'/><br/>
                <label>Password:</label>
                <input type='text' name='password'/><br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default SignUp