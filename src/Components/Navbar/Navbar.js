import styles from './Navbar.module.css';
import logo from './logo1.png';
function Navbar() {
    return (
        <nav>
            <div>
                <img src={logo} alt='logo' className={styles.Logo} />
            </div>
            <div>
                <ul className={styles.NavItems}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Resources</a></li>
                    <li><a href="/">About</a></li>
                </ul>
            </div>
            <div>
                <button className={styles.button}>Contribute</button>
            </div>
        </nav >
    );
}

export default Navbar;