import styles from './index.module.css'
import { Link, useLocation } from 'wouter'

const Nav = ({ refs }) => {
  const [location, setLocation] = useLocation()

  const scrollIntoView = current => {
    refs[current].current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={styles.nav}>
      <Link href={'/'}>
        <h1 className={styles.title}>doorj</h1>
      </Link>
      <ul className={styles.navItemList}>
        {location !== '/' ? (
          <li className={styles.listItem}>
            <Link href="/">
              <a className={styles.navLink}>Inicio</a>
            </Link>
          </li>
        ) : (
          <>
            <li className={styles.listItem}>
              <button onClick={() => scrollIntoView(0)} className={styles.navButton}>
                Inicio
              </button>
            </li>
            <li className={styles.listItem}>
              <button onClick={() => scrollIntoView(1)} className={styles.navButton}>
                Productos
              </button>
            </li>
            <li className={styles.listItem}>
              <button onClick={() => scrollIntoView(2)} className={styles.navButton}>
                Nosotros
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Nav
