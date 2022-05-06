import { useSelector, useDispatch } from 'react-redux';
import { Navbar } from 'react-bootstrap';
import { getUserName } from 'redux/selectors';
import { logOut } from 'redux/auth-operations';
import { LogoutButton } from './UserMenu.styled';
const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  const HandleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>Signed in as: {name}</Navbar.Text>
      <LogoutButton onClick={HandleLogOut}>Logout</LogoutButton>
    </Navbar.Collapse>
  );
};
export default UserMenu;
