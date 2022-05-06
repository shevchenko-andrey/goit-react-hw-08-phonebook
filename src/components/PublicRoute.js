import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
import PropTypes from 'prop-types';
function PublicRoute({ children }) {
  const IsLoggdIn = useSelector(getIsLoggedIn);
  console.log(IsLoggdIn);
  return !IsLoggdIn ? children : <Navigate to="/contacts" />;
}
PublicRoute.propTypes = {
  children: PropTypes.element,
};
export default PublicRoute;
