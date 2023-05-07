import styles from '../styles/Navbar.module.css';
import {Link} from 'react-router-dom';

const Navbar = (props) => {

    return(
        <nav className={styles.navbar}>
            <ul className={styles["navbar-nav"]}>
                <li className={styles["nav-item"]}>
                <Link to="/home" style={props.selected === 'home' ? {color: '#4535be',textDecoration:"underline"} : {color: '#908cb6'}} className={styles["nav-link"]}>HOME</Link>
                </li>
                <li className={styles["nav-item"]}>
                <Link to="/stations" style={props.selected === 'stations' ? {color: '#4535be',textDecoration:"underline"} : {color: '#908cb6'}} className={styles["nav-link"]}>STATIONS</Link>
                </li>
                <li className={styles["nav-item"]}>
                <Link style={props.selected === 'account' ? {color: '#4535be',textDecoration:"underline"} : {color: '#908cb6'}} className={styles["nav-link"]}>ACCOUNT</Link>
                </li>
                <li className={styles["nav-item"]}>
                <Link style={props.selected === 'support' ? {color: '#4535be',textDecoration:"underline"} : {color: '#908cb6'}} className={styles["nav-link"]}>SUPPORT</Link>
                </li>
            </ul>
        </nav>
  );
}

export default Navbar;
