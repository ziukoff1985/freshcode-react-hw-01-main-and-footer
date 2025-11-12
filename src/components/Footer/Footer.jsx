import { Component } from 'react';
import styles from './Footer.module.css';

export class Footer extends Component {
    render() {
        const { studioAdress, directorEmail, ownerNumber } = this.props;
        return (
            <div className={styles.footer}>
                <p>
                    <span>Studio address:</span> {studioAdress}
                </p>
                <p>
                    <span>Director email:</span> {directorEmail}
                </p>
                <p>
                    <span>Site owner number:</span> {ownerNumber}
                </p>
            </div>
        );
    }
}

export default Footer;
