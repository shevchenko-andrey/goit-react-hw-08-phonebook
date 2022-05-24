import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import { GlobalStyle } from '../Base/BaseStyle';
import { lazy, Suspense } from 'react';
import AppBar from '../components/AppBar';
import { getCurrentUser } from 'redux/auth-operations';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import { getIsFetchingUser } from 'redux/selectors';
import CenteredSpinner from './Spinners/CenteredSpinner';

const ContactsPage = lazy(() => import('../pages/ContactsPage'));

const RegisterPage = lazy(() => import('../pages/RegisterPage'));

const LoginPage = lazy(() => import('../pages/LoginPage'));

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
        <Suspense fallback="">
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
        </Suspense>
      )}

      <Toaster />
    </>
  );
};

export default App;
