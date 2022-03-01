import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Products = ({product}) => {
  return (
    <Card className="my-4 p-4 rounded">
      <a href={`/products/${product._id}`}>
        <Card.Img src={product.image} alt="product-image" variant="top" />
      </a>

      <Card.Body>
        <a href={`/products/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as="div">
          <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Products