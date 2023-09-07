import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardWidget from '../CardWidget/CardWidget';
const NavbarComponent = ()=>{
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><Link to = "/">Tiendum</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item ><Link to ={"/category/remeras"}>Remeras</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to ={"/category/zapatillas"}>Zapatillas</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Buzos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Ayuda
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    <CardWidget />
        

    </Navbar>
  );
}

export default NavbarComponent;