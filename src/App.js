import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MoviePage from './MoviePage'
import SignUp from './SignUp'
import LogIn from './LogIn'
import MovieForm from './MovieForm'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import MovieShowPage from './MovieShowPage';



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
  ifClicked: false,
  movieForm: false
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

  toggleLoginFormOff = () => {
    this.setState({
      loginForm: false
    })
  }

  toggleSignUpForm = () => {
    this.setState({
      signUpForm: true
    })
  }

  toggleSignUpFormOff = () => {
    this.setState({
      signUpForm: false
    })
  }

  ifClicked = () => {
    // console.log("hey")
    this.setState({
      ifClicked: !this.state.ifClicked
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

addMovie = (e) => {
  e.preventDefault()
  console.log(e)

  let newMovie = {
    user_id: this.state.loggedUser.id,
    title: e.target[0].value,
    genre: e.target[1].value,
    review: e.target[2].value,
    image: e.target[3].value,
    video_link: e.target[4].value,
    movie_info: e.target[5].value,
  }
  fetch(moviesUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(
      newMovie
    )
  })
  .then(res => res.json())
  .then( this.setState({
    movies: [...this.state.movies, newMovie],
    movieForm: !this.state.form
  })
  )
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
        ? <SignUp createUser={this.createUser} ifClicked={this.ifClicked}/>
        :null}
      </div>  */}

      {/* </div> */}
       <Switch>
      <Route path='/signup' render={(routerProps) => <SignUp {...routerProps} createUser={this.createUser}/>} />
      <Route path='/login' render={(routerProps) => <LogIn {...routerProps} logIn={this.logInUser} />} />
      <Route exact path='/movies' render={(routerProps) => <MoviePage {...routerProps} movies={this.state.movies} addToWatchList={this.addToWatchList}/>} />
<<<<<<< HEAD
      <Route path ="/movies/new" render={(routerProps) => <MovieForm {...routerProps} addMovie={this.addMovie}/>} />
=======
      <Route path='/movies/:id' render={(routerProps) => <MovieShowPage {...routerProps} addToWatchList={this.addToWatchList}/>} />

>>>>>>> movie-show-page
    </Switch> 

   
    
     

    </div>
    </BrowserRouter>
  );
}

}

export default App;
