import styles from './index.module.css'
import Nav from '../../components/Nav'
import useProducts from '../../hooks/useProducts'

const Product = () => {
  const { activeProduct } = useProducts()
  // const { discount, stock, price, title, imageUrl } = activeProduct

  const mock = {
    id: '2135daad-5c0f-47ba-9848-c5396ca7c2d6',
    title: 'Set de luz simple',
    price: (19.99 * 186).toFixed(2),
    discount: 35,
    imageUrl: 'car_door_open_light_alert_3.jpg',
    stock: true,
  }

  const { discount, stock, price, title, imageUrl } = mock

  return (
    <div className={styles.container}>
      <Nav />
      <aside className={styles.asideBar}>
        <h1 className={styles.productTitle}>{title}</h1>
        <p className={styles.productDescription}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere ullam impedit officiis illo vel vitae cum
          eligendi, earum possimus rerum.
        </p>
        <div>
          <span>Precio</span>
          <span>{price}</span>
          <div>
            <span>Descuentos</span>
            <div className={styles.discountContainer}>
              <span className={styles.discountCodeText}>
                Código de descuento <span className={styles.discountCode}>VER2021</span> aplicado 10%
              </span>
              <span className={styles.discountCodeText}>
                Código de descuento <span className={styles.discountCode}>LANZAMIENTO</span> aplicado {discount}%
              </span>
            </div>
          </div>

          <p className={styles.warningText}>Precio sujeto a impuestos y regulaciones regionales.</p>
        </div>
        <button className={styles.button}>Comprar</button>
      </aside>
    </div>
  )
}

export default Product
