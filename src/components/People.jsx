import React, { Component } from 'react';

export default class People extends Component {
    render() {
        let people = this.props.people.map((person) => {
            return (
                <div key={person.id} className="card col-md-3" style={{ width: '18rem' }}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Name: {person.name}</li>
                        <li className="list-group-item">Age: {person.age}</li>
                        <li className="list-group-item">Gender: {person.gender}</li>
                        <li className="list-group-item">Hair Color: {person.hair_color}</li>
                        <li className="list-group-item">Eye Color: {person.eye_color}</li>
                    </ul>
                </div >
            )
        });
        return (
            <div className="row">{people}</div>
        )
    }
}