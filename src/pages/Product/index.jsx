import styles from './index.module.css'
import Nav from '../../components/Nav'

const Product = ({ params }) => {
  const { title } = params
  return (
    <div className={styles.container}>
      <Nav />
      <h1>Product {title}</h1>
    </div>
  )
}

export default Product
