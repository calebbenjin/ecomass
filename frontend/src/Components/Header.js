import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Toaster from './Toaster'

const Header = () => {
  return (
    <header>
      {/* <Toaster /> */}
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container>
          <Link to='/'>
            <Navbar.Brand>Ecommass</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='m-auto'>
              <Link to='/products'>
                <Nav.Link>Products</Nav.Link>
              </Link>
              <Link to='/'>
                <Nav.Link>Pricing</Nav.Link>
              </Link>
            </Nav>
            <Nav>
              <Link to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </Link>
              <Link to='/login'>
                <Nav.Link>
                  <i className='fas fa-user'></i> Sign in
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
