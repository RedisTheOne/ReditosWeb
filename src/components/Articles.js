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
    document.querySelector('.articles').innerHTML = "<h2>Loading...</h2>";
    fetch('https://ancient-wave-97718.herokuapp.com/articles')
    .then(res => res.json())
    .then(text => {
      document.querySelector('.articles').innerHTML = "";
      this.setState({articles: text.reverse()});
    })
    .catch(err => console.log(err));
  }

  render() {
    const articles = this.state.articles.map((article, i) => (
      <div id={i} className="article">
        <a style={{textDecoration: "none"}} href={"/search/" + article.author}>
          <button className="btn btn-secondary" style={{width: "100%", textAlign: "left"}}>
            {article.author}
          </button> 
        </a>
        <h2 id={i}>{article.title}</h2>
        <h5 id={i}>{article.body}</h5>
      </div>
    ));
    return (
      <div>
        <ul className = "nav">
          <Link to={'/add'}>
            <li><a style={{color: "white"}}>Add</a></li>
          </Link>
          <Link to={'/myarticles'}>
            <li><a style={{color: "white"}}>MyArticles</a></li>
          </Link>
          <Link to={'/search'}>
            <li><a style={{color: "white"}}>Search</a></li>
          </Link>
          <Link to={'/login'}>
            <li><a style={{color: "white"}}>LogOut</a></li>
          </Link>
        </ul>
        <div className="container" style={{paddingTop: "50px"}}>
          <div className="articles">
            {articles}
          </div>
        </div>
      </div>
    );
  }
}

export default Articles;
