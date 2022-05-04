import UserMenu from '../UserMenu';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
const AppBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">PhoneBook</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="login">
              Login
            </Nav.Link>
            <Nav.Link as={NavLink} to="contacts">
              Contacts
            </Nav.Link>
            <Nav.Link as={NavLink} to="register">
              register
            </Nav.Link>
          </Nav>
          <UserMenu />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default AppBar;
