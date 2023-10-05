import styles from './Landing.module.css';
import image1 from './image1.jpg'; 
import image2 from './img_2.jpg'; 
function Landing() {
  return (
    <div className={styles.LandingContainer}>
            <div className={styles.Hero}>
                <div className={styles.HeroLeft}>
                  
                </div>
                <div className={styles.HeroRight}>
                <img className={styles.img2} src={image2} alt="image2" />
          <img className={styles.img1} src={image1} alt="image1" />
                </div>
            </div>
    </div>
  );
}

export default Landing;