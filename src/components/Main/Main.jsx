import { Component } from 'react';

export class Main extends Component {
    render() {
        const { plot, actors, country, studio, genre, releaseDate } =
            this.props;
        return (
            <>
                <h2>Movie: The Shawshank Redemption</h2>
                <p>Plot: {plot}</p>
                <ul>
                    {actors.map((actor) => (
                        <li key={actor}>{actor}</li>
                    ))}
                </ul>
                <p>Country: {country}</p>
                <p>Studio: {studio}</p>
                <p>Genre: {genre}</p>
                <p>Release date: {releaseDate}</p>
            </>
        );
    }
}

export default Main;
