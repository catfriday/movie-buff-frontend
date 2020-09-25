import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MoviePage from './MoviePage'
import SignUp from './SignUp'


const moviesUrl = 'http://localhost:3000/movies' 

class App extends Component  {
state = {
  movies: [],
  user: ''
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
console.log(e.target.username.value)
}

render(){
  return (
    <div className="App">
     {/* <Header /> */}
     <SignUp createUser={this.createUser}/>
     <MoviePage movies={this.state.movies}/>

    </div>
  );
}

}

export default App;
