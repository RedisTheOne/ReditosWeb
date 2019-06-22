import React from 'react';
import {Link} from 'react-router-dom';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: []
    }
  }

  change = (e) => {
    if(e.target.value !== "") {
      document.querySelector('.users').innerHTML = "";
      this.state.members.forEach((member) => {
        if(member.username.toLowerCase().indexOf(e.target.value.toLowerCase()) != -1) {
          document.querySelector('.users').innerHTML += `
          <p>${member.username}</p>
          `;
        } else {
          console.log(false);
        }
      });
    }
  }

  componentDidMount() {
    fetch('https://ancient-wave-97718.herokuapp.com/members')
    .then((res) => res.json())
    .then((text) => {
      this.setState({members: text});
    })
    .catch(err => alert(err));
  }

  render() {
    return(
      <div>
        <ul>
          <Link to={'/articles'}>
            <li><a style={{color: "white"}}>Articles</a></li>
          </Link>
          <Link to={'/add'}>
            <li><a style={{color: "white"}}>Add</a></li>
          </Link>
          <Link to={'/login'}>
            <li><a style={{color: "white"}}>LogOut</a></li>
          </Link>
        </ul>
        <div className="search">
          <h2>Search your favourite user &#128540;</h2>
          <input onChange={this.change} style={{width: "80%", background: 'transparent', border: "1px solid black", borderRadius: "25px", padding: "5px"}} />
          <br />
          <div className="users">
          </div>
        </div>
      </div>
    );
  }
}