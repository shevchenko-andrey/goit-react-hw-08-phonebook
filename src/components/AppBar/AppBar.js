import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
import UserMenu from '../UserMenu';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Logo } from './AppBar.styled';
const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Logo>PhoneBook</Logo>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!isLoggedIn && (
              <Nav.Link as={NavLink} to="login">
                Login
              </Nav.Link>
            )}
            {isLoggedIn && (
              <Nav.Link as={NavLink} to="contacts">
                Contacts
              </Nav.Link>
            )}
            {!isLoggedIn && (
              <Nav.Link as={NavLink} to="register">
                register
              </Nav.Link>
            )}
          </Nav>
          {isLoggedIn && <UserMenu />}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default AppBar;
