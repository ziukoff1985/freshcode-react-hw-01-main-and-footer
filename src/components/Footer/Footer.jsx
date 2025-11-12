import { Component } from 'react';

export class Footer extends Component {
    render() {
        const { studioAdress, directorEmail, ownerNumber } = this.props;
        return (
            <>
                <p>Studio address: {studioAdress}</p>
                <p>Director email: {directorEmail}</p>
                <p>Site owner number: {ownerNumber}</p>
            </>
        );
    }
}

export default Footer;
