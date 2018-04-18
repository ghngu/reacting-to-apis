import React, { Component } from 'react';
import Cards from './components/Cards';
import People from './components/People';
import 'isomorphic-fetch';
import 'es6-promise';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            films: [],
            people: [],
            showFilms: false,
            showPeople: false
        }
    }

    componentDidMount() {
        let baseUrl = "https://ghibliapi.herokuapp.com"
        fetch(`${baseUrl}/films`)
            .then(res => { return res.json() })
            .then(films => this.setState({ films }));
        fetch(`${baseUrl}/people`)
            .then(res => { return res.json() })
            .then(people => this.setState({ people }));
    }

    handleClickFilms() {
        this.setState({
            showFilms: !this.state.showFilms
        })
    }

    handleClickPeople() {
        this.setState({
            showPeople: !this.state.showPeople
        })
    }

    render() {
        if (this.state.showFilms === true) {
            return (
                <div className="container">
                    <div className="jumbotron mb-2">
                        <img className="w-100" src="https://www.theedgesusu.co.uk/wp-content/uploads/2016/01/studio_ghibli.jpg" alt="Something went Wrong" />
                    </div>
                    <div className="buttons mb-4 d-flex justify-content-center">
                        <button type="button" className="btn btn-info btn-lg" onClick={() => { this.handleClickFilms() }}>Films</button>
                        <button type="button" className="btn btn-info btn-lg" onClick={() => { this.handleClickPeople() }}>People</button>
                    </div>

                    <Cards films={this.state.films} />
                </div>
            )
        } else if (this.state.showPeople === true) {
            return (
                <div className="container-fluid">
                    <div className="jumbotron-fluid mb-2">
                        <img className="w-100" src="https://www.theedgesusu.co.uk/wp-content/uploads/2016/01/studio_ghibli.jpg" alt="Something went Wrong" />
                    </div>
                    <div className="buttons mb-4 d-flex justify-content-center">
                        <button type="button" className="btn btn-info btn-lg" onClick={() => { this.handleClickFilms() }}>Films</button>
                        <button type="button" className="btn btn-info btn-lg" onClick={() => { this.handleClickPeople() }}>People</button>
                    </div>

                    <People people={this.state.people} />
                </div>
            )
        } else {
            return (
                <div className="container-fluid">
                    <div className="jumbotron-fluid mb-2">
                        <img className="w-100" src="https://www.theedgesusu.co.uk/wp-content/uploads/2016/01/studio_ghibli.jpg" alt="Something went Wrong" />
                    </div>
                    <div className="buttons mb-4 d-flex justify-content-center">
                        <button type="button" className="btn btn-info btn-lg" onClick={() => { this.handleClickFilms() }}>Films</button>
                        <button type="button" className="btn btn-info btn-lg" onClick={() => { this.handleClickPeople() }}>People</button>
                    </div>
                </div>
            )
        }
    }
}