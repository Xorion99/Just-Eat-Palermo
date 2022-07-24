import React, { Component } from 'react';


class Card extends Component {
    render() {
        return (
            <div class="card" style={{ width: '18rem', textAlign: 'center' }}>
                <img src={this.props.img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{this.props.titolo}</h5>
                    <p class="card-text">{this.props.prezzo}€</p>
                    <button class="btn btn-outline-danger ">Elimina</button>
                </div>
            </div>


        );
    }

}

export default Card;