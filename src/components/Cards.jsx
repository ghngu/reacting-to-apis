import React, { Component } from 'react';

export default class Cards extends Component {
    render() {
        let films = this.props.films.map((card) => {
            return (
                <div key={card.id} className="card col-md-3 mb-2" style={{ width: "18rem" }}>
                    <img className="card-img-top" src="http://christandpopculture.com/wp-content/uploads/2014/08/20140816.ghibliA.jpg" alt="something" />
                    <div className="card-body">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">{card.description.substring(0, 100)}...</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Director: {card.director}</li>
                        <li className="list-group-item">Producer: {card.producer}</li>
                        <li className="list-group-item">Release: {card.release_date}</li>
                    </ul>
                </div>
            )
        })
        return (
            <div className="row">{films}</div>
        )
    }
}