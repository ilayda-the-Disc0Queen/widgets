import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

//  console.log(results);

  useEffect(() => {
    const searchApi = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', { // options object
        params: {
          action: 'query',
          list: 'search',
          format: 'json',
          origin: '*',
          srsearch: searchTerm
        }
      });
      setResults(data.query.search);
    };

    if (searchTerm && !results.length) {
      searchApi();
    } else {
      const timeoutId = setTimeout(() => {
      if (searchTerm) {
        searchApi();
      }
    }, 500);
    }

    //setTimeout is a built in JS function




  }, [searchTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
          Go!
          </a>
        </div>
        <div className="content">
          <div className="header">
            {result.title}
          </div>
          <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
        </div>
      </div>
    );
  });

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
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  );
};

export default Search;
