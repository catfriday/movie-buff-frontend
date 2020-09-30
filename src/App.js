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
import MovieCard from './MovieCard';
import EditForm from './EditForm';
import Header from './Header'
import HomePage from './HomePage';



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
  watchlist:[],
  titleFormState: '',
  movie: {}
 
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
  let user = this.state.loggedUser
  let removeMovie = movie
  fetch('http://localhost:3000/watchlist/delete', {
    method: 'POST',
    headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          user: user,
          movie: removeMovie
      
        })
  })

   let newMovie = this.state.watchlist.filter(movieObj => movieObj !== removeMovie)
      this.setState({
        watchlist: newMovie
      })
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

updateMyMovie = (updatedMovie) => {
  this.setState({
    // titleFormState: 'Update Your Movie',
    movie: updatedMovie
  })
  // fetch(moviesUrl + movie.id, {
  //   method: 'PATCH',
  //   headers:{
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json'
  //   },
  //   body: JSON.stringify
  // })
}

handleChange = (e) => {
  console.log(e.target.name)
  console.log(e.target.value)
  let name = e.target.name
    let value = e.target.value

    this.setState({
      movie: {...this.state.movie, [name]:value}
    })
console.log(this.state.movie)

}

patchMovie = () => {
  // title: this.state.movie.title,
  //   genre:this.state.movie.genre,
  //   review: this.state.movie.review,
  //   image: this.state.movie.image,
  //   video_link: this.state.movie.video_link,
  //   movie_info: this.state.movie.movie_info, 
  
// let movie = this.state.movie 
// console.log(movie)

let review =  this.state.movie.review

fetch(moviesUrl + this.state.id, {
    method: 'PATCH',
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
     review
    })
  })
  .then(res => res.json())
  .then(console.log)
}


 increaseLikes = (movie) =>{
   fetch(moviesUrl + movie.id, {
     method: 'PATCH', 
     headers:{
      'Content-Type': 'application/json',
      Accept: 'application/json'
     },
     body: JSON.stringify({
       likes: movie.likes + 1
     })
   })
   .then(resp => resp.json())
   .then (likes => console.log(likes))
 }

 disLikes = (movie) =>{
  fetch(moviesUrl + movie.id, {
    method: 'PATCH', 
    headers:{
     'Content-Type': 'application/json',
     Accept: 'application/json'
    },
    body: JSON.stringify({
      dislikes: movie.dislikes + 1
    })
  })
  .then(resp => resp.json())
  .then (dislikes => console.log(dislikes))
}





render(){
  return (
    <BrowserRouter>
    <Header /> 
  

    <div className="App">
      
     <SideBar currentUser={this.state.loggedUser} userMovie={this.state.userMovie} watchlistButton={this.watchlistMovie} />
     {/* <WatchList currentUser={this.state.loggedUser} /> */}
       <Switch>
      <Route path='/home' render={(routerProps) => <HomePage {...routerProps} />} />
      <Route path='/signup' render={(routerProps) => <SignUp {...routerProps} createUser={this.createUser}/>} />
      <Route path='/login' render={(routerProps) => <LogIn {...routerProps} logIn={this.logInUser} />} />
      <Route exact path='/movies' render={(routerProps) => <MoviePage {...routerProps} likes={this.increaseLikes} dislikes={this.disLikes} movies={this.state.movies} addToWatchList={this.addToWatchList} currentUser={this.state.loggedUser} />} />
      <Route path ="/movies/new" render={(routerProps) => <MovieForm {...routerProps} addMovie={this.addMovie} title={this.state.titleFormState} movie={this.state.movie} updateMyMovie={this.updateMyMovie}/>} />
      <Route path='/movies/watchlist' render={(routerProps) => <WatchList {...routerProps} currentUser={this.state.loggedUser} watchlist={this.state.watchlist} delete={this.deleteWatchlistItem}/>} />
      <Route exact path='/movies/:id' render={(routerProps) => <MovieShowPage {...routerProps} likes={this.increaseLikes} dislikes={this.disLikes} addToWatchList={this.addToWatchList} currentUser={this.state.loggedUser}/>} />
      <Route path='/my-movies' render={(routerProps) => <MyMovies {...routerProps} movies={this.state.userMovie} deleteMyMovie={this.deleteMyMovie} updateMyMovie={this.updateMyMovie}/>}/>
      <Route path='/edit-my-movie' render={(routerProps) => <EditForm {...routerProps} handleChange={this.handleChange} movie={this.state.movie} patch={this.patchMovie}/>} />
    </Switch> 
  
    </div>
    </BrowserRouter>
  );
}

}

export default App;
