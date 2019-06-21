import React from 'react';
import logo from './logo.png';

export default class SingUp extends React.Component {
  componentDidMount() {
    localStorage.removeItem('username');
  }
  
  click = () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if(username !== "" && password !== "") {
      fetch(`https://ancient-wave-97718.herokuapp.com/members/add/${username}/${password}`, {
        method: "POST",
      }).catch(err => alert(err));
      localStorage.setItem('username', username);
      window.location = 'http://localhost:3000/articles';  
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
          </form>
          <button className="btn btn-primary" style={{width: "100%"}} onClick={this.click}>Submit</button>
        </div>
      </div>
    );
  }
}