import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand><Nav.Link><Link to="/home">Apple Store</Link></Nav.Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/home">Home</Link></Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/category/smartphones">SmartPhones</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/category/laptops">Laptops</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/category/fragrances">Fragrances</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;