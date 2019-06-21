import React from 'react';
import {Link} from 'react-router-dom';

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    if(!localStorage.getItem('username')) {
      window.location = 'https://serene-bayou-80098.herokuapp.com/login';
    }
    fetch('https://ancient-wave-97718.herokuapp.com/articles')
    .then(res => res.json())
    .then(text => this.setState({articles: text.reverse()}))
    .catch(err => console.log(err));
  }

  render() {
    const articles = this.state.articles.map((article, i) => (
      <div id={i} className="article">
        <h2 id={i}>{article.title}</h2>
        <h5 id={i}>{article.body}</h5>
        <strong id={i}>By: {article.author}</strong>
        <br></br>
        <br />

      </div>
    ));
    return (
      <div>
        <ul>
          <Link to={'/add'}>
            <li><a style={{color: "white"}}>Add</a></li>
          </Link>
          <Link to={'/myarticles'}>
            <li><a style={{color: "white"}}>MyArticles</a></li>
          </Link>
          <Link to={'/login'}>
            <li><a style={{color: "white"}}>LogOut</a></li>
          </Link>
        </ul>
        <div className="container">
          <h1>Articles</h1>
          <div className="articles">
            {articles}
          </div>
        </div>
      </div>
    );
  }
}

export default Articles;
