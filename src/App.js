/** @jsx jsx */
import React from 'react';
import NavBar from './NavBar.js';
import FormBody from "./FormBody.js";
import ProductBody from './ProductBody.js';
import SearchBarBody from './SearchBarBody.js';
import WelcomeBody from './WelcomeBody.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {css, jsx} from "@emotion/core";
import './App.css';

const resetMargin = css`margin: 0px, padding:0px;`;

function App() {
  return (
    <Router>
      <div className={resetMargin}>
        <NavBar />
        <Route exact path="/" component={WelcomeBody} />
        <Route path='/register' component={FormBody} />
        <Route path='/search' component={SearchBarBody} />
        <Route path='/products' component={ProductBody} />
      </div>
    </Router>
  );
}

export default App;
