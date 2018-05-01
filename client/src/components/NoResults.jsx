import React from 'react';

const NoResults = ({}) => (
  <div>
    <div className="ui icon message">
      <i className="ban icon"></i>
      <div className="content">
        <div className="header">
          No results
        </div>
        <p>Try searching by one specific field.</p>
      </div>
    </div>
  </div>
);

export default NoResults;
