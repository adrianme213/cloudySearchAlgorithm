import React from 'react';

const Search = ({updateSearch}) => (
  <div>
    <input onKeyUp={updateSearch} id="search-input" type="text" />
    <button onClick={updateSearch} className="">Search</button>
  </div>
);

export default Search;
