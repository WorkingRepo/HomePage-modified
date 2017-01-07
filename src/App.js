import React, { Component } from 'react';

import Navigation from './Navigation';
import About from './About';
import Popular from './Popular';
import NearBy from './NearBy';
import Services from './Services';
import Contact from './Contact';



  class App extends Component {

  render() {

  return(




   <div className="App">
    <Navigation/>
    <About/>
    <Popular/>
    <Services/>
    <Contact/>
      </div>
    );
  }
}


export default App;
