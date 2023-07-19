import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../Assets/LogoPOSITIVO.png'
import '../components/navBar.css';
import { Button } from 'react-bootstrap';
//from: https://react-bootstrap.netlify.app/docs/components/navbar Collapsible example
function navBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="" width="230" height="90" className="d-inline-block align-text-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav id='nav_items'>
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            
            <NavDropdown title="Servicios" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#ortodoncia">Ortodoncia</NavDropdown.Item>
              <NavDropdown.Item href="#periodoncia">Periodoncia</NavDropdown.Item>
              <NavDropdown.Item href="#implantes">Implantes</NavDropdown.Item>
              <NavDropdown.Item href="#endodoncia">Endodoncia</NavDropdown.Item>
              <NavDropdown.Item href="#odontologiaGeneral">Odontología General</NavDropdown.Item>
              <NavDropdown.Item href="#Rehabilitación">Rehabilitacion</NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Estetica">
                Estética
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#inicio">Contacto</Nav.Link>
            <Nav.Link eventKey={2} href="#reservaTuHora">
              <Button variant="outline-info">Reserva tu Hora</Button>{' '}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navBar;