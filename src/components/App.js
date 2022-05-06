import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import { GlobalStyle } from '../Base/BaseStyle';
import ContactsPage from '../pages/ContactsPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import AppBar from '../components/AppBar';
import { getCurrentUser } from 'redux/auth-operations';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import { getIsFetchingUser } from 'redux/selectors';
import CenteredSpinner from './Spinners/CenteredSpinner';
const App = () => {
  const isFetchingUser = useSelector(getIsFetchingUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <>
      <GlobalStyle />
      <AppBar />
      {isFetchingUser && <CenteredSpinner />}

      {!isFetchingUser && (
        <Routes>
          <Route
            path="login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          ></Route>
          <Route path="*" element={<Navigate to="login" />} />
        </Routes>
      )}

      <Toaster />
    </>
  );
};

export default App;
