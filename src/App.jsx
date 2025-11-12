import { Component } from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import './App.css';

class App extends Component {
    state = {
        movies: ['The Shawshank Redemption', 'The Godfather', 'Pulp Fiction'],
        plot: 'Framed in the 1940s for double murder, upstanding banker Andy Dufresne begins a new life at the Shawshank prison',
        actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
        info: {
            country: 'USA',
            studio: 'Columbia Pictures',
            studioAdress: 'New York, New York',
            directorEmail: 'frank_darabont@gmail.com',
            genre: 'Drama, Crime',
            releaseDate: '1994-09-23',
        },
        ownerNumber: '+380501234567',
    };

    render() {
        return (
            <>
                <h1>React 01. Main and Footer</h1>
                <Header movies={this.state.movies} />
                <Main
                    plot={this.state.plot}
                    actors={this.state.actors}
                    info={this.state.info}
                />
                <Footer
                    info={this.state.info}
                    ownerNumber={this.state.ownerNumber}
                />
            </>
        );
    }
}

export default App;
