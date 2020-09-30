import React from 'react'
import { Link }  from 'react-router-dom'

const SignUp = (props) => {
   const handleSubmit = () => {

        props.history.push("/movies") 
    }

    return(
        <div className='login'>
            <h3>Sign Up Here</h3>
            <form onSubmit={(e)=> {
                props.createUser(e)
                handleSubmit() } 
                }>
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