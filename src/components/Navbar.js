import styles from '../styles/Navbar.module.css';
import {Link} from 'react-router-dom';

const Navbar = () => {

    return(
        <nav className={styles.navbar}>
            <ul className={styles["navbar-nav"]}>
                <li className={styles["nav-item"]}>
                <Link className={styles["nav-link"]}>HOME</Link>
                </li>
                <li className={styles["nav-item"]}>
                <Link className={styles["nav-link"]}>STATIONS</Link>
                </li>
                <li className={styles["nav-item"]}>
                <Link className={styles["nav-link"]}>ACCOUNT</Link>
                </li>
                <li className={styles["nav-item"]}>
                <Link className={styles["nav-link"]}>SUPPORT</Link>
                </li>
            </ul>
        </nav>
  );
}

export default Navbar;
