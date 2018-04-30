import React from 'react';

const Search = ({}) => (
  <div>
    <input onKeyUp={()=>{console.log('keyup')}} className="" type="text" />
    <button onClick={()=>{console.log('clicked')}} className="">Search</button>
  </div>
);

export default Search;
