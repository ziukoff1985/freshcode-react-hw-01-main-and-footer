import { Component } from 'react';
import styles from './Header.module.css';

export class Header extends Component {
    render() {
        const { movies } = this.props;
        return (
            <>
                <ul className={styles.list}>
                    {movies.map((movie) => (
                        <li key={movie}>🎞️ {movie} 🎞️</li>
                    ))}
                </ul>
            </>
        );
    }
}

export default Header;
