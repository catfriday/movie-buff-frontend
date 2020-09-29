import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MoviePage from './MoviePage'
import SignUp from './SignUp'
import LogIn from './LogIn'
import MovieForm from './MovieForm'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import MovieShowPage from './MovieShowPage';
import SideBar from './SideBar'
import WatchList from './WatchList'
import MyMovies from './MyMovies'



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
  movieForm: false,
  userMovie: [],
  watchlist:[]
}

componentDidMount(){
  fetch(moviesUrl)
  .then(resp => resp.json())
  .then(movies => this.setState({
    movies:  movies.map(movie => {return {...movie, userMovie:false}})
  }))
}

// userMovies = () => {

//   let newMovies = this.state.movies.map(movie => {
//     if (movie.user_id === this.state.loggedUser.id){
//       return {...movie, userMovie: true}

//     }
//     return movie
//   })
//  this.setState({
//    movies: newMovies
//  })

// }


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
      loggedUser: loggedUser,
      userMovie: loggedUser.posted_movies,
      watchlist: loggedUser.watchlist
  
    }))
    
  }

  // watchlistMovie = () =>{
  //  if (this.state.loggedUser.movies){

  //    let list = this.state.loggedUser.movies.filter(movie => !this.state.loggedUser.posted_movies.includes(movie))
  //    this.setState({
  //      watchlist: list
  //    })
  //  }

  // }

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

deleteWatchlistItem = (movie) => {
  fetch(watchListUrl + movie.id, {
    method: 'DELETE'
  })
  .then(console.log)
  console.log(movie)
}

deleteMyMovie = (movie) => {
  // console.log(movie)
  fetch(moviesUrl + movie.id, {
    method: 'DELETE'
  })
  let myMovie = this.state.userMovie.filter(movieObj => movieObj !== movie)
  this.setState({
    userMovie: myMovie
  })
}






render(){
  return (
    <BrowserRouter>
  
     <SideBar currentUser={this.state.loggedUser} userMovie={this.state.userMovie} watchlistButton={this.watchlistMovie} />

    <div className="App">
     {/* <Header /> */}
     {/* <WatchList currentUser={this.state.loggedUser} /> */}
       <Switch>
      <Route path='/signup' render={(routerProps) => <SignUp {...routerProps} createUser={this.createUser}/>} />
      <Route path='/login' render={(routerProps) => <LogIn {...routerProps} logIn={this.logInUser} />} />
      <Route exact path='/movies' render={(routerProps) => <MoviePage {...routerProps} movies={this.state.movies} addToWatchList={this.addToWatchList} currentUser={this.state.loggedUser} />} />
      <Route path ="/movies/new" render={(routerProps) => <MovieForm {...routerProps} addMovie={this.addMovie}/>} />
      <Route path='/movies/watchlist' render={(routerProps) => <WatchList {...routerProps} currentUser={this.state.loggedUser} watchlist={this.state.watchlist} delete={this.deleteWatchlistItem}/>} />
      <Route exact path='/movies/:id' render={(routerProps) => <MovieShowPage {...routerProps} addToWatchList={this.addToWatchList} currentUser={this.state.loggedUser}/>} />
      <Route path='/my-movies' render={(routerProps) => <MyMovies {...routerProps} movies={this.state.userMovie} deleteMyMovie={this.deleteMyMovie}/>}/>

    </Switch> 
  
    </div>
    </BrowserRouter>
  );
}

}

export default App;
