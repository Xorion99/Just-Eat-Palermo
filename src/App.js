import './App.css';
import React, { Component } from 'react';
import Navbar from './component/navbar';
import Card from './component/card';
import milza from './images/milza.jpg'
class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <h1>Cosa vuoi mangiare</h1>
        <hr></hr>
        <div className='row'>
          <Card 
          img = {milza}
          prezzo = '2,50'
          />

        </div>
      </>
    );
  }
}

export default App;
