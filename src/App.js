import React from 'react';
import Articles from './components/Articles';
import './App.css';
import Search from './components/Search';
import Add from './components/Add';
import Delete from './components/Delete';
import Login from './components/Login';
import SingUp from './components/SingUp';
import SearchUser from './components/SearchUser';
import MyArticles from './components/MyArticles';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
        integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
        crossOrigin="anonymous"></link>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/add" exact component={Add} />
          <Route path="/articles" exact component={Articles} />
          <Route path='/delete/:id' exact component={Delete} />
          <Route path='/myarticles' exact component={MyArticles} />
          <Route path='/search' exact component={Search} />
          <Route path='/singup' exact component={SingUp} />
          <Route path='/search/:username' exact component={SearchUser} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
