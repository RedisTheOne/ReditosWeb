import React from 'react';
import './style/circle.css';
import {Redirect, Link} from 'react-router-dom';

export default class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id
    }
  }

  componentDidMount() {
    if(!localStorage.getItem('username')) {
      window.location = 'http://localhost:3000/login';
    }
    fetch('https://ancient-wave-97718.herokuapp.com/article/delete', {
      method: 'POST',
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        id: this.state.id
      })
    }).catch((err) => alert(err));
    setTimeout(() => {
      document.querySelector('.delete').innerHTML = "<h1>Deleted</h1>";
      document.querySelector('.delete').className = "deleted";
    }, 2500);
  }

  render() {
    return(
      <div>
        <div className="delete">
          <h1>Deleting...</h1>
        </div>
      </div>

    );
  }
}