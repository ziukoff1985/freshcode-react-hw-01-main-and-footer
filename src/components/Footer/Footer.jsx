import { Component } from 'react';
import styles from './Footer.module.css';

export class Footer extends Component {
    render() {
        const { studioAdress, directorEmail, ownerNumber } =
            this.props.secondaryInfo;
        return (
            <ul className={styles.footer}>
                <li>
                    <span>Studio address:</span> {studioAdress}
                </li>
                <li>
                    <span>Director email:</span> {directorEmail}
                </li>
                <li>
                    <span>Site owner number:</span> {ownerNumber}
                </li>
            </ul>
        );
    }
}

export default Footer;
