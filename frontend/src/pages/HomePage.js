import { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Products from '../Components/Products'
import axios from 'axios'

const HomePage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('/api/v1/products')

      setProducts(res.data)
    }

    fetchProducts()
  },[])

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

export default HomePage