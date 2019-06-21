import React from 'react';
import {Link} from 'react-router-dom';

class MyArticles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    if(!localStorage.getItem('username')) {
      window.location = 'http://localhost:3000/login';
    }
    fetch('https://ancient-wave-97718.herokuapp.com/article/' + localStorage.getItem('username'))
    .then(res => res.json())
    .then(text => this.setState({articles: text.reverse()}))
    .catch(err => console.log(err));
  }

  render() {
    const articles = this.state.articles.map((article, i) => (
      <div id={i} className="article">
        <h2 id={i}>{article.title}</h2>
        <h5 id={i}>{article.body}</h5>
        <Link to={`/delete/${article._id}`}>
          <button className="btn btn-danger" style={{width: "70%"}}>Delete</button>
        </Link>
      </div>
    ));
    return (
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
          <Link to={'/myarticles'}>
          </Link>
        </ul>
        <div className="container">
          <h1>User: {localStorage.getItem('username')}&#128520;</h1>
          <h1>Posts: {this.state.articles.length}</h1>
          <div className="articles">
            {articles}
          </div>
        </div>
      </div>
    );
  }
}

export default MyArticles;
