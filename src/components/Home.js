import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
  return(
    <div>
      <div className="home">
        <h5 className="h1">This website was made by Redis Rira and his friends!</h5>
        <br />
        <Link style={{width: "75%"}} to={'/login'}>
          <a style={{width: "200px"}} id="aa">Log In</a>
        </Link>
      </div>
    </div>
  );
}

export default Home;