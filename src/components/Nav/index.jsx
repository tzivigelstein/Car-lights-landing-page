import styles from './index.module.css'
import { Link } from 'wouter'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link href={'/'}>
        <h1 className={styles.title}>doorj</h1>
      </Link>
      <ul className={styles.navItemList}>
        <li className={styles.listItem}>Inicio</li>
        <li className={styles.listItem}>Productos</li>
        <li className={styles.listItem}>Nosotros</li>
      </ul>
    </nav>
  )
}

export default Nav
