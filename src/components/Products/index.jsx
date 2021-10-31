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
      <p className={styles.productsSectionHelper}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, nulla.
      </p>
    </section>
  )
})

export default Products
