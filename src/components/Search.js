import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const searchApi = asycnc () => {
      await axios.get('api url');
    };
    searchApi();
  }, [searchTerm]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter search term</label>
          <input
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
