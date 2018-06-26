import React, { Component } from 'react';

import { CenteredHeader } from './App.js'

class Home extends Component {
  render() {
    return (
      <div>
        <CenteredHeader>Hi! Welcome to our group!</CenteredHeader>
        <p>
         Feel free to poke around and check out our portfolio.
        </p>
        
      </div>
    );
  }
}

export default Home;
