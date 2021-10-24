import styles from './index.module.css'

const About = () => {
  return (
    <section className={styles.section}>
      <div className={styles.aboutInfoContainer}>
        <div className={styles.staffImagesContainer}>
          <div className={styles.staffSquare}>
            <img className={styles.staffSquareImage} src="./assets/pep1.jpg" alt="Daniel Ojeda - CFO" />
          </div>
          <div className={styles.staffSquare}>
            <img className={styles.staffSquareImage} src="./assets/pep2.png" alt="Tzivi Gelstein - CEO" />
          </div>
          <div className={styles.staffSquare}>
            <img className={styles.staffSquareImage} src="./assets/pep3.jpg" alt="Gonzalo Khammar - COO" />
          </div>
          <div className={`${styles.staffSquare} ${styles.lastSquare}`}>
            <span className={styles.staffName}>Daniel</span>
            <span className={styles.staffName}>Tzivi</span>
            <span className={styles.staffName}>Gonzalo</span>
          </div>
        </div>
        <div className={styles.infoContainer}>
          <h3 className={styles.aboutTitle}>
            Un poco sobre <span className={styles.accentTitleBrand}>doorj</span>
          </h3>
          <p className={styles.aboutText}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quibusdam repellat culpa, quisquam ipsa nemo
            nulla beatae blanditiis dicta est eius. Modi harum doloribus aliquid nostrum neque corrupti dolore ea. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Quae, velit.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
