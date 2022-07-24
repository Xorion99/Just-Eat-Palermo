import './App.css';
import React, { Component } from 'react';
import Navbar from './component/navbar';
import Card from './component/card';
import milza from './images/milza.jpg'
import panelle from './images/panelle.jpeg'
class App extends Component {
state = {
  cards: [
    {id: 0, img: milza, nome: 'Panino con milza', prezzo: '2,50'},
    {id: 1, img: panelle, nome:'Panino con le panelle',prezzo: '1,50'}
  ]
}

  render() {
    return (
      <>
        <Navbar />
        <div className='conteiner'>
        <h1>Cosa vuoi mangiare</h1>
        <hr></hr>
        <div className='row'>
        {this.state.cards.map(card =>(<Card
         key={card.id}
         img={card.img}
         titolo={card.nome}
         prezzo={card.prezzo}
         />))}

        </div>
        </div>
      </>
    );
  }
}

export default App;
