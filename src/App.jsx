import { Component } from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import './App.css';

class App extends Component {
    movies = ['The Shawshank Redemption', 'The Godfather', 'Pulp Fiction'];
    primaryInfo = {
        movie: 'The Shawshank Redemption',
        plot: 'Framed in the 1940s for double murder, upstanding banker Andy Dufresne begins a new life at the Shawshank prison',
        actors: [
            'Tim Robbins',
            'Morgan Freeman',
            'Bob Gunton',
            'William Sadler',
        ],
        country: 'USA',
        studio: 'Columbia Pictures',
        genre: 'Drama, Crime',
        releaseDate: '1994-09-23',
    };
    secondaryInfo = {
        studioAdress: 'New York, USA',
        directorEmail: 'frank_darabont@gmail.com',
        ownerNumber: '+380501234567',
    };

    render() {
        return (
            <>
                <h1>React 01. Main and Footer</h1>
                <Header movies={this.movies} />
                <Main primaryInfo={this.primaryInfo} />
                <Footer secondaryInfo={this.secondaryInfo} />
            </>
        );
    }
}

export default App;
