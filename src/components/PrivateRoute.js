import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
import PropTypes from 'prop-types';
function PrivateRoute({ children }) {
  const IsLoggedIn = useSelector(getIsLoggedIn);
  return IsLoggedIn ? children : <Navigate to="/login" />;
}
PrivateRoute.propTypes = {
  children: PropTypes.element,
};
export default PrivateRoute;
