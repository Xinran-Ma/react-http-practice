import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      // if the domain is example.com/my-app, we need to set a basename like below. Otherwise the basename is '/'
      <BrowserRouter basename="/my-app">
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
