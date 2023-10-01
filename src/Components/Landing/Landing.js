import styles from './Landing.module.css';

function Landing() {
  return (
    <div className={styles.LandingContainer}>
            <div className={styles.Hero}>
                <div>
                  {/* It is div 1. Do not do anything here */}
                </div>
                <div className={styles.HeroRight}>
                    {/* Do here and change the css class accordingly */}
                </div>
            </div>
    </div>
  );
}

export default Landing;