import { Component } from 'react';
import styles from './Main.module.css';

export class Main extends Component {
    render() {
        const { movie, plot, actors, country, studio, genre, releaseDate } =
            this.props.primaryInfo;
        return (
            <div className={styles.container}>
                <h2 className={styles.title}>📽️ {movie} 📽️</h2>

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
                            <li>
                                <span>Country: </span>
                                {country}
                            </li>
                            <li>
                                <span>Studio: </span>
                                {studio}
                            </li>
                            <li>
                                <span>Genre: </span>
                                {genre}
                            </li>
                            <li>
                                <span>Release: </span>
                                {releaseDate}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
