import React from 'react';
import {Redirect, Link}from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  add = () => {
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;
    const author = localStorage.getItem('username');

    if(title !== "" && body !== "" && author !== "") {
      fetch(`https://ancient-wave-97718.herokuapp.com/articles/add/${title}/${author}/${body}`, {
        method: "POST",
      })
      .catch(err => console.log(err));
      alert('Added');
    }
  }

  render() {
    return (
      <div>
        <ul>
          <Link to={'/articles'}>
            <li><a style={{color: "white"}}>Articles</a></li>
          </Link>
          <Link to={'/login'}>
            <li><a style={{color: "white"}}>LogOut</a></li>
          </Link>
        </ul>
        <div className="container">
          <h1>Add</h1>
          <div className="form-group">
            <label>Title</label>
            <input id="title" type="text" className="form-control" />
            <label>Body</label>
            <textarea id="body" type="text" className="form-control" />
            <button className="btn btn-primary" style={{width: "100%", marginTop: "20px"}} onClick={this.add}>Add</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;