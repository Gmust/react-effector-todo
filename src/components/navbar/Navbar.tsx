import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './Navbar.module.scss'

const Navbar = () => {
    return (
        <ul className={styles.navbarWrapper}>
            <li><NavLink className={styles.links} to={'/counter'}>Counter</NavLink></li>
            <li><NavLink className={styles.links} to={'/users'}>Users</NavLink></li>
            <li><NavLink className={styles.links} to={'/form'}>Form</NavLink></li>
            <li><NavLink className={styles.links} to={'/Todos'}>Todos</NavLink></li>
        </ul>
    );
};

export default Navbar;