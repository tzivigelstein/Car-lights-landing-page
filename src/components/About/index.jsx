import { forwardRef } from 'react'
import styles from './index.module.css'

const About = forwardRef((props, ref) => {
  return (
    <section ref={ref} className={styles.section}>
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
            Queremos resolver un gran problema de los automóviles. Todos quieren utilizar algún tipo de protección
            vehicular, pero nadie sabe cuál es la mejor opción. Afortunadamente llegamos nosotros, doorj. Nosotros nos
            aseguramos de asegurarlos con nuestro novedoso sistema de luces protectoras, para ayudar a la mayor
            cantidad de personas posible.
          </p>
        </div>
      </div>
    </section>
  )
})

export default About
