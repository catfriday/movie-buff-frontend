import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MoviePage from './MoviePage'
import SignUp from './SignUp'
import LogIn from './LogIn'
import {BrowserRouter, Route, Switch} from 'react-router-dom'



const moviesUrl = 'http://localhost:3000/movies/' 
const loginUsersUrl = 'http://localhost:3000/users/login/'
const usersUrl = 'http://localhost:3000/users/'
const watchListUrl = 'http://localhost:3000/watchlists/'

class App extends Component  {
state = {
  movies: [],
  loggedUser: {},
  loginForm: false,
  signUpForm: false,
  ifClicked: false
}

componentDidMount(){
  fetch(moviesUrl)
  .then(resp => resp.json())
  .then(movies => this.setState({
    movies
  }))
}

createUser = (e) =>{
  e.preventDefault()
  let username = e.target.username.value
  let password = e.target.password.value
  // let user = {
  //   username,
  //   password
  // }
  fetch(usersUrl, {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json'
  },
  body: JSON.stringify({
    username,
    password
  })
})
  .then(res => res.json())
  .then(loggedUser => 
    
    this.setState({
    loggedUser
    })
)
  }

  logInUser = (e) => {
    e.preventDefault()
    // console.log(e.target.username.value)
    fetch(loginUsersUrl + e.target.username.value)
    .then(res => res.json())
    .then(loggedUser => this.setState({
      loggedUser: loggedUser
    }))
  }

  toggleLoginForm = () => {
    this.setState({
      loginForm: true
    })
  }

  toggleSignUpForm = () => {
    this.setState({
      signUpForm: true
    })
  }

  ifClicked = () => {
    console.log("hey")
    this.setState({
      ifClicked: true
    })
  }

addToWatchList = (movie) => {
  fetch(watchListUrl, {
    method: "POST", 
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      movie_id: movie.id,
      user_id: this.state.loggedUser.id
    })
  })
  .then(resp => resp.json())
  .then(console.log)
}




render(){
  return (
    <BrowserRouter>
  

    <div className="App">
     {/* <Header /> */}
     
      {/* {this.state.ifClicked ? null:
      <div onClick={this.ifClicked}>
        <button onClick={this.toggleLoginForm}>Log In </button>
        <button onClick={this.toggleSignUpForm}>Sign Up</button>
     </div>  } 
        
       <div>
        {this.state.loginForm
        ? <LogIn logIn={this.logInUser} />
        : null}
        
      </div>  
        
      <div>
        {this.state.signUpForm
        ? <SignUp createUser={this.createUser}/>
        :null}
      </div>  */}

      {/* </div> */}
       <Switch>
      <Route path='/signup' render={(routerProps) => <SignUp {...routerProps} createUser={this.createUser}/>} />
      <Route path='/login' render={(routerProps) => <LogIn {...routerProps} logIn={this.logInUser} />} />
      <Route exact path='/movies' render={(routerProps) => <MoviePage {...routerProps} movies={this.state.movies} addToWatchList={this.addToWatchList}/>} />
     
    </Switch> 
    
     

    </div>
    </BrowserRouter>
  );
}

}

export default App;
