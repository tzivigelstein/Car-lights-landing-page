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

  const finalPrice = (price - price * 0.1 - (price * discount) / 100).toFixed(2)

  return (
    <div className={styles.container}>
      <Nav />
      <img className={styles.productImage} src={`../../../assets/${imageUrl}`} alt={title} />
      <aside className={styles.asideBar}>
        <div className={styles.titleAndPrice}>
          <h1 className={styles.productTitle}>{title}</h1>
          <span className={styles.productPrice}>${price}</span>
        </div>
        <p className={styles.productDescription}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere ullam impedit officiis illo vel vitae cum
          eligendi, earum possimus rerum.
        </p>
        <div>
          <div>
            <h4 className={styles.discountTitle}>Descuentos</h4>
            <div className={styles.discountContainer}>
              <span className={styles.discountCodeText}>
                Código de descuento <span className={styles.discountCode}>VER2021</span> aplicado 10%
              </span>
              <span className={styles.discountCodeText}>
                Código de descuento <span className={styles.discountCode}>LANZAMIENTO</span> aplicado {discount}%
              </span>
            </div>
            <span style={{ color: 'green' }}>{finalPrice}</span>
          </div>
        </div>
        <button className={styles.button}>Comprar</button>
        <p className={styles.warningText}>Precio sujeto a impuestos y regulaciones regionales*</p>
      </aside>
    </div>
  )
}

export default Product
