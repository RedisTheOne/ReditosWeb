import React from 'react';
import {Link} from 'react-router-dom';

function Search() {
  return(
    <div>
      <div className="search">
        <h2>Search your favourite user &#128540;</h2>
        <input style={{width: "80%", background: 'transparent', color: '#fff', border: "1px solid white", borderRadius: "25px", padding: "5px"}} />
        <br />
        <Link to={'/'}>
          <a style={{paddingLeft: "50px", paddingRight: "50px", margin: "50px"}} id="aa">Search</a>
        </Link>
      </div>
    </div>
  );
}

export default Search;