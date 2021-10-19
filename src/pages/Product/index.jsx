import React from 'react'

const Product = ({ params }) => {
  const { title } = params
  return (
    <div>
      <h1>Product {title}</h1>
    </div>
  )
}

export default Product
