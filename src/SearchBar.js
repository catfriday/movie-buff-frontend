import React from 'react';

const SearchBar = (props) => {
  return (
      <div>
          <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.sort === 'Alphabetically'} onChange={(e) => props.handleSort(e.target.value)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Likes" checked={props.sort === 'Likes'} onChange={(e) => props.handleSort(e.target.value)}/>
       Most Liked
      </label>
      <br></br>
      <label>
        <strong>Filter by Genre:</strong>
        <select onChange={(e) => props.handleFilter(e.target.value)}>
          <option value='All'>All</option>
          <option value="Romance">Romance</option>
          <option value="Action Thriller">Action Thriller</option>
          <option value="Horror">Horror</option>
          <option value="Cult Film">Cult Film</option>
          <option value="Comedy">Comedy</option>
          <option value="Progressive Rock">Progressive Rock</option>
          <option value="Mafia">Mafia</option>
          <option value="Drama">Drama</option>
          <option value="Melodrama">Melodrama</option>
          <option value="Fantasy">Fantasy</option>
        </select>
      </label>

      </div>
  )

}

export default SearchBar;