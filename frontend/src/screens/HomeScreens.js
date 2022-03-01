import React from 'react'
import products from "../products"
import { Row, Col } from 'react-bootstrap'
import Products from '../Components/Products'

const HomeScreens = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map(product => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Products product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreens