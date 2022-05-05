import { useSelector, useDispatch } from 'react-redux';
import { Navbar, Button } from 'react-bootstrap';
import { getUserName } from 'redux/selectors';
import { logOut } from 'redux/auth-operations';
const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  const HandleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>Signed in as: {name}</Navbar.Text>
      <Button onClick={HandleLogOut}>LogOut</Button>
    </Navbar.Collapse>
  );
};
export default UserMenu;
