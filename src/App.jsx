import { Component } from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import './App.css';

class App extends Component {
    state = {
        movies: ['The Shawshank Redemption', 'The Godfather', 'Pulp Fiction'],
        primaryInfo: {
            movie: 'The Shawshank Redemption',
            country: 'USA',
            studio: 'Columbia Pictures',
            genre: 'Drama, Crime',
            releaseDate: '1994-09-23',
            actors: [
                'Tim Robbins',
                'Morgan Freeman',
                'Bob Gunton',
                'William Sadler',
            ],
            plot: 'Framed in the 1940s for double murder, upstanding banker Andy Dufresne begins a new life at the Shawshank prison',
        },
        secondaryInfo: {
            studioAdress: 'New York, USA',
            directorEmail: 'frank_darabont@gmail.com',
            ownerNumber: '+380501234567',
        },
    };

    render() {
        return (
            <>
                <Header movies={this.state.movies} />
                <Main primaryInfo={this.state.primaryInfo} />
                <Footer secondaryInfo={this.state.secondaryInfo} />
            </>
        );
    }
}

export default App;
