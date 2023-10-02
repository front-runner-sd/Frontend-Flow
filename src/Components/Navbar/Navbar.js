import styles from './Navbar.module.css';
import logo from './Logo.png';
function Navbar() {
    return (
        <nav>
            <div>
                <img src={logo} className={styles.Logo} />
            </div>
            <div>
                <ul className={styles.NavItems}>
                    <li><a>Home</a></li>
                    <li><a>Resources</a></li>
                    <li><a>About</a></li>
                </ul>
            </div>
            <div>
                    <button className={styles.button}>Contribute</button>
            </div>
        </nav >
    );
}

export default Navbar;