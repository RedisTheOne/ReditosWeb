import React from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.png';

export default class Login extends React.Component {
  componentDidMount() {
    localStorage.removeItem('username');
  }
  
  click = () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if(username !== "" && password !== "") {
      fetch('https://ancient-wave-97718.herokuapp.com/members')
      .then((res) => res.json())
      .then((text) => {
        const members = text;
        members.forEach((member, i) => {
          if(member.username === username && member.password === password) {
            window.location = 'http://localhost:3000/articles';
            localStorage.setItem('username', username);
          }
        });
      })
      .catch((err) => alert(err));
    }
  }
  render() {

    return(
      <div>
        <div className="container" style={{alignContent: 'center', textAlign: 'center'}}>
          <img style={{width: "40%"}} src={logo} />
          <form className="form-group">          
            <label style={{float: "left"}}>Username</label>
            <input id="username" type="text" className="form-control"></input>
            <label style={{float: "left"}}>Password</label>
            <input type="password"
            id="password" className="form-control"></input>
            <br />
          </form>
          <button className="btn btn-primary" style={{width: "100%"}} onClick={this.click}>Submit</button>
        </div>
      </div>
    );
  }
}