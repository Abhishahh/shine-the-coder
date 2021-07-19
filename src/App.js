import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Afterh from './Afterh';
import Courses from './Courses';
import Sub from './Sub';
import Footer from './Footer';
import Contact from './Contact';
import Vue from "./Vue"
import Reactt from './Reactt'; 
import Angular  from './Angular';
import Jquery from './Jquery';
import Semantic from './Semantic';
import Svelt from './Svelt';
import Django from './Django';
import Laravel from './Laravel';
import Flask from './Flask';
import Net from './Net';
import Express from './Express';
import Node from './Node';
import Mysql from './Mysql';
import Mongo from './Mongo';
import Post from './Post';
/*      <Route path="/reactt">
<Navbar />
<Reactt />

</Route>*/
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/Courses">
            <Navbar />
            <Courses />
          </Route>
          <Route path="/Sub">
            <Navbar />
            <Sub />
          </Route>
          <Route path="/Contact">
            <Navbar />
            <Contact />
          </Route>
          <Route path="/Vue">
            <Navbar />
            <Vue />
           
          </Route>
          <Route path="/reactt">
            <Navbar />
            <Reactt />
           
          </Route>
          <Route path="/angular">
            <Navbar />
            <Angular />
           
          </Route>
          <Route path="/jquery">
            <Navbar />
            <Jquery />
           
          </Route>
          <Route path="/semantic">
            <Navbar />
            <Semantic/>
           
          </Route>
          <Route path="/svelt">
            <Navbar />
            <Svelt />
           
          </Route>
          <Route path="/django">
            <Navbar />
            <Django />
           
          </Route>
          <Route path="/laravel">
            <Navbar />
            <Laravel />
           
          </Route>
          <Route path="/flask">
            <Navbar />
            <Flask />
           
          </Route>
          <Route path="/net">
            <Navbar />
            <Net />
           
          </Route>
          <Route path="/express">
            <Navbar />
            <Express />
           
          </Route>
          <Route path="/node">
            <Navbar />
            <Node />
           
          </Route>
          <Route path="/mysql">
            <Navbar />
            <Mysql />
           
          </Route>
          <Route path="/mongo">
            <Navbar />
            <Mongo />
           
          </Route>
          <Route path="/postgre">
            <Navbar />
            <Post />
           
          </Route>
          
          <Route path="/">
            <Navbar />
            <Home />
            <Afterh />
            <Footer />
          </Route>
          {/*end*/}
        </Switch>
        {/* header */}
        {/* Home*/}
      </div>
    </Router>
  );
}

export default App;
