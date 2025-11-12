import { Component } from 'react';
import styles from './Main.module.css';

export class Main extends Component {
    render() {
        const { plot, actors, country, studio, genre, releaseDate } =
            this.props;
        return (
            <div className={styles.container}>
                <h2 className={styles.title}>📽️ The Shawshank Redemption 📽️</h2>

                <p className={styles.plot}>
                    <span className={styles.span}>Plot:</span> {plot}
                </p>

                <div className={styles.main}>
                    <div>
                        <h3>Actors</h3>
                        <ul className={styles.actors}>
                            {actors.map((actor) => (
                                <li key={actor}>{actor}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3>Movie info</h3>
                        <ul className={styles.movieInfo}>
                            <li>Country: {country}</li>
                            <li>Studio: {studio}</li>
                            <li>Genre: {genre}</li>
                            <li>Release date: {releaseDate}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
