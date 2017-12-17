import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Navigation.css';

const Navigation = (props, context) => {
    return  <div className={styles.header}>
                <nav className={styles.nav}>
                    <ul>
                        <li className={styles.selected}><Link to="/home">Home</Link></li>
                        <li className={styles.selected}><Link to="/">Posts</Link></li>
                        <li className={styles.selected}><Link to="/about">About</Link></li>     
                    </ul>
                </nav>
            </div>
    };


Navigation.propTypes = {
};

export default Navigation;