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
import SearchBar from './SearchBar'




const moviesUrl = 'http://localhost:3000/movies/' 
const loginUsersUrl = 'http://localhost:3000/users/login/'
const usersUrl = 'http://localhost:3000/users/'
const watchListUrl = 'http://localhost:3000/watchlists/'

class App extends Component  {
state = {
  movies: [],
  filteredMovies: [],
  loggedUser: {},
  loginForm: false,
  signUpForm: false,
  ifClicked: false,
  movieForm: false,
  userMovie: [],
  watchlist:[],
  titleFormState: '',
  movie: {},
  sort: "",
  filterType: "All"
 
}

componentDidMount(){
  fetch(moviesUrl)
  .then(resp => resp.json())
  .then(movies => this.setState({
    movies:  movies.map(movie => {return {...movie, userMovie:false}}),
    filteredMovies:  movies.map(movie => {return {...movie, userMovie:false}}) 
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
      loggedUser: loggedUser,
      userMovie: loggedUser.posted_movies,
      watchlist: loggedUser.watchlist
  
    }))
    
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
    movie: updatedMovie
  })
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
let review =  this.state.movie.review
fetch(moviesUrl + this.state.movie.id, {
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

 increaseLikes = (id, likes) =>{
   console.log("clicked")
   fetch(moviesUrl + id, {
     method: 'PATCH', 
     headers:{
      'Content-Type': 'application/json',
      Accept: 'application/json'
     },
     body: JSON.stringify({
       likes: likes + 1
     })
   })
   .then(resp => resp.json())
   .then(movie => this.setState({
      movies: this.state.filteredMovies.map(movie => {
      if (movie.id === id){
        movie.likes += 1
      }
      return movie
    })
  }))
     
 }

 disLikes = (id, dislikes) =>{
  console.log("clicked")
  fetch(moviesUrl + id, {
    method: 'PATCH', 
    headers:{
     'Content-Type': 'application/json',
     Accept: 'application/json'
    },
    body: JSON.stringify({
      dislikes: dislikes + 1
    })
  })
  .then(resp => resp.json())
  .then(movie => this.setState({
    movies: this.state.filteredMovies.map(movie => {
      if (movie.id === id){
        movie.dislikes += 1
      }
      return movie
    })}))
}

handleSort = (value) => {
  //console.log(value)
  if(value === 'Alphabetically'){
    this.setState({
      filteredMovies: this.state.movies.sort((a,b) => a.title > b.title? 1: -1),
      sort: "Alphabetically"
    })
  } else {
    this.setState({
      filteredMovies: this.state.movies.sort((a,b) => a.likes < b.likes? 1: -1),
      sort: 'Likes'
    })

  }
  
}

handleFilter = (value) => {
  if(value !== 'All'){
    this.setState({
      filterType: value,
      filteredMovies: this.state.movies.filter(movie => movie.genre === value)
    })
  }
  else{
    this.setState({
      filterType: 'All',
      filteredMovies: this.state.movies
    })
  }

}


render(){

 
  return (
    <BrowserRouter>
    <Header /> 
  
     <SideBar currentUser={this.state.loggedUser} userMovie={this.state.userMovie} watchlistButton={this.watchlistMovie} />
     <SearchBar handleSort={this.handleSort} sort={this.state.sort} handleFilter={this.handleFilter}  />

    <div className="App">
       <Switch>
      <Route path='/home' render={(routerProps) => <HomePage {...routerProps} />} />
      <Route path='/signup' render={(routerProps) => <SignUp {...routerProps} createUser={this.createUser}/>} />
      <Route path='/login' render={(routerProps) => <LogIn {...routerProps} logIn={this.logInUser} />} />
      <Route exact path='/movies' render={(routerProps) => <MoviePage {...routerProps} likes={this.increaseLikes} dislikes={this.disLikes} movies={this.state.filteredMovies} addToWatchList={this.addToWatchList} currentUser={this.state.loggedUser} />} />
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
