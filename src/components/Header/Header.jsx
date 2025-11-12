import { Component } from 'react';

export class Header extends Component {
    render() {
        const { movies } = this.props;
        return (
            <>
                <ul className='movies'>
                    {movies.map((movie) => (
                        <li key={movie}>{movie}</li>
                    ))}
                </ul>
            </>
        );
    }
}

export default Header;
