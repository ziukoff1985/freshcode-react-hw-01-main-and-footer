import { Component } from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import './App.css';

class App extends Component {
    state = {
        movies: ['The Shawshank Redemption', 'The Godfather', 'Pulp Fiction'],
        plot: 'Framed in the 1940s for double murder, upstanding banker Andy Dufresne begins a new life at the Shawshank prison',
        actors: [
            'Tim Robbins',
            'Morgan Freeman',
            'Bob Gunton',
            'William Sadler',
        ],
        country: 'USA',
        studio: 'Columbia Pictures',
        studioAdress: 'New York, USA',
        directorEmail: 'frank_darabont@gmail.com',
        genre: 'Drama, Crime',
        releaseDate: '1994-09-23',
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
                    country={this.state.country}
                    studio={this.state.studio}
                    genre={this.state.genre}
                    releaseDate={this.state.releaseDate}
                />
                <Footer
                    studioAdress={this.state.studioAdress}
                    directorEmail={this.state.directorEmail}
                    ownerNumber={this.state.ownerNumber}
                />
            </>
        );
    }
}

export default App;
