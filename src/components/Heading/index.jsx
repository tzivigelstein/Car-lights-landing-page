import { forwardRef } from 'react'
import Button from '../Button'
import { RightArrow } from '../Icons'
import styles from './index.module.css'

const Heading = forwardRef((props, ref) => {
  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.infoContainer}>
        <h1 className={styles.text}>Descubre el nuevo diseño que le dará mas seguridad a tu vida.</h1>
        <p className={styles.helperText}>
          Llegaron los descuentos de <span className={styles.glowingText}>VERANO</span> por un 10% en todas las compras
          mas un descuento del 30% de bienvenida
        </p>
        <Button text="Ver productos" icon={<RightArrow />} />
      </div>
      <img className={styles.backgroundImage} src="./assets/home_heading_background.jpg" alt="Car with lights on" />
    </section>
  )
})

export default Heading
