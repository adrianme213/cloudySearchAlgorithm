import React from 'react';

const Search = ({updateSearch}) => (
  <div className="ui three column centered grid search">
    <div className="ui input">
      <input className="prompt" onKeyUp={updateSearch} id="search-input" type="text" placeholder="Search transactions..."/>
    </div>
    <button className="ui icon button" onClick={updateSearch}>
      <i className="search icon"></i>
    </button>
  </div>
);

export default Search;
