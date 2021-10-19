import React from 'react'
import styles from './index.module.css'
import products from '../../../database'

import Product from '../Product'

const Products = () => {
  return (
    <section className={styles.section}>
      <ul className={styles.productList}>
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </section>
  )
}

export default Products
