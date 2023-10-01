import styles from './App.module.css';
import Landing from './Components/Landing/Landing';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className={styles.AppContainer}>
      <div className={styles.App}>
        <Navbar/>
        <Landing/>
    </div>
    </div>
  );
}

export default App;
