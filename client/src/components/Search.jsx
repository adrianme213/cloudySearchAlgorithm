import React from 'react';

const Search = ({updateSearch, clearSearch}) => (
  <div className="ui eight column centered grid">
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onKeyUp={updateSearch} id="search-input" type="text" placeholder="Search transactions..."/>
        <i className="search icon"></i>
      </div>
    </div>
    <button className="ui right labeled icon button" onClick={clearSearch}>
      <i className="trash alternate outline icon"></i>Clear
    </button>
  </div>
);

export default Search;
