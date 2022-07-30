import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../Components/Rating'
import { useDispatch, useSelector } from 'react-redux'
import { productDetail } from '../actions/productActions'
import Loader from '../Components/Loader'
import Message from '../Components/Message'

const ProductPage = ({ match }) => {
  const dispatch = useDispatch()
  const productDetails = useSelector(state => state.productDetail)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(productDetail(match.params.id))
  },[dispatch, match])

  
  return (
    <>
      <Link className="btn btn-light my-3" to="/">Go Back</Link>
      {loading ? <Loader /> : error ? <Message variant="danger" /> :
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: ${product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup.Item variant="flush">
              <Row>
                <Col>Price:</Col>
                <Col>
                  <strong>${product.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>
                  {product.countInStock > 0 ? 'In Stock' : 'Out of stock'}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button className="btn-block" type="button" disabled={product.countInStock === 0}>
                Add To Cart
              </Button>
            </ListGroup.Item>
          </Card>
        </Col>
      </Row>
    }
    </>
  )
}

export default ProductPage