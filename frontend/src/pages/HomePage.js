import { useEffect } from 'react'
import { useDispatch, useSelector } from 'redux-thunk'
import { Row, Col } from 'react-bootstrap'
import Products from '../Components/Products'
import { listProduct } from '../actions/productActions'

const HomePage = () => {
  const dispatch = useDispatch()
  const listProduct = useSelector(state => state.listProduct)
  const { loading, error, products } = listProduct

  useEffect(() => {
    dispatch(listProduct())
  },[dispatch])

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? <h2>Loading...</h2> : error ? <h2>{Error}</h2> : 
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