import styles from './index.module.css'
import products from '../../../database'

import Product from '../Product'
import { forwardRef } from 'react'

const Products = forwardRef((props, ref) => {
  return (
    <section ref={ref} className={styles.section}>
      <h3 className={styles.productsSectionTitle}>Linea de productos premium</h3>
      <ul className={styles.productList}>
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
      <p className={styles.productsSectionHelper}>El precio se olvida, la calidad se recuerda. La mejor proteccion para tus seres queridos.</p>
    </section>
  )
})

export default Products
