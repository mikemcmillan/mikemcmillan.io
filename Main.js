import React, { Component } from "react";
import {
  Route, 
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";
import Projects from "./Projects";
import Writing from "./Writing";
import About from "./About";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1><center>Mike McMillan's Web Site</center></h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/resume">Resume</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/writing">Writing</NavLink></li>
            <li><NavLink to="/about">About This Website</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/writing" component={Writing}/>
            <Route path="/about" component={About}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;