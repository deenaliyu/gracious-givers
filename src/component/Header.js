import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Assets/Web/home/Logo.png';

function Header() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home"> <img src={logo} alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="navee" href="#home">Home</Nav.Link>
            <Nav.Link className="navee" href="./Project">Project</Nav.Link>
            <Nav.Link className="navee" href="">About</Nav.Link>
            <Nav.Link className="navee" href="#link">News</Nav.Link>
            <Nav.Link className="navee" href="#link">Contact</Nav.Link>
            <Button className="bte" variant="outline-success">Donate</Button>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

