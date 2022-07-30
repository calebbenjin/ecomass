import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Link } from 'react-router-dom'
// import Toaster from './Toaster'

const Header = () => {
  return (
    <header>
      {/* <Toaster /> */}
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container>
          <Router>
            <Link to='/'>
              <Navbar.Brand>Ecommass</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='m-auto'>
                <Link to='/products'>
                  <span className="link">Products</span>
                </Link>
                <Link to='/'>
                  <span className="link">Pricing</span>
                </Link>
              </Nav>
              <Nav>
                <Link to='/cart'>
                  <span className="link">
                    <i className='fas fa-shopping-cart'></i> Cart
                  </span>
                </Link>
                <Link to='/login'>
                  <span className="link">
                    <i className='fas fa-user'></i> Sign in
                  </span>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Router>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
