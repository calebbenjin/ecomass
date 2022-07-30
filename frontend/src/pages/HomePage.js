import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Products from '../Components/Products'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
import { listProducts } from '../actions/productActions'

const HomePage = () => {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  },[dispatch])

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? <Loader /> : error ? <Message variant="danger" /> : 
      <Row>
        {products.map(product => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Products product={product} />
          </Col>
        ))}
      </Row>
    }
    </>
  )
}

export default HomePage