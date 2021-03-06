import React from 'react';
import {Link} from 'react-router-dom';
import avatar from '../avatar.jpg';
import './style/MyArticles.css';

class MyArticles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      member: {following: []}
    }
  }

  componentDidMount() {
    if(!localStorage.getItem('username')) {
      window.location = 'http://localhost:3000/login';
    }
    //Fetch Articles
    fetch('https://ancient-wave-97718.herokuapp.com/article/' + localStorage.getItem('username'))
    .then(res => res.json())
    .then(text => this.setState({articles: text.reverse()}))
    .catch(err => console.log(err));
    //Fetch Member
    fetch('https://ancient-wave-97718.herokuapp.com/members/' + localStorage.getItem('username'))
    .then(res => res.json())
    .then(text => this.setState({member: text}))
    .catch(err => console.log(err));
  }

  render() {
    const articles = this.state.articles.map((article, i) => (
      <div id={i} className="articlee">
        <Link to={`/delete/${article._id}`}>
          <button type="button" class="close" aria-label="Close" style={{float: "right"}}>
            <span aria-hidden="true">&times;</span>
          </button>
        </Link>
        <h2 id={i}>{article.title}</h2>
        <h5 id={i}>{article.body}</h5>
      </div>
    ));
    return (
      <div>
        <ul className = "nav">
          <Link to={'/articles'}>
            <li><a style={{color: "white"}}>Articles</a></li>
          </Link>
          <Link to={'/add'}>
            <li><a style={{color: "white"}}>Add</a></li>
          </Link>
          <Link to={'/search'}>
            <li><a style={{color: "white"}}>Search</a></li>
          </Link>
          <Link to={'/login'}>
            <li><a style={{color: "white"}}>LogOut</a></li>
          </Link>
          
        </ul>
        <div className="container" style={{paddingTop: "30px"}}>
          <div className="info">
            <img style={{height: "150px"}} src={avatar} />
            <div>
              <h3 style={{width: "100%"}}>User: {this.state.member.username}&#128520;</h3>
              <h3 style={{width: "100%"}}>Posts: {this.state.articles.length}</h3>
              <h3 style={{width: "100%"}}>Following: {this.state.member.following.length}</h3>
            </div>
          </div>
          <div className="articless">
              {articles}
            </div>
        </div>
      </div>
    );
  }
}

export default MyArticles;
