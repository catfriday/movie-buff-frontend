import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MoviePage from './MoviePage'
import SignUp from './SignUp'
import LogIn from './LogIn'


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
      loginForm: !this.state.loginForm
    })
  }

  toggleSignUpForm = () => {
    this.setState({
      signUpForm: !this.state.signUpForm
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
    <div className="App">
     {/* <Header /> */}
     
      <div onClick={this.ifClicked}>
        <button onClick={this.toggleLoginForm}>Log In </button>
        
        {this.state.loginForm
        ? <LogIn logIn={this.logInUser} />
        : null}
        
        <button onClick={this.toggleSignUpForm}>Sign Up</button>
        {this.state.signUpForm
        ? <SignUp createUser={this.createUser}/>
        :null}
      </div>
     
     
     <MoviePage movies={this.state.movies} addToWatchList={this.addToWatchList}/>
     

    </div>
  );
}

}

export default App;
