import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyle } from '../Base/BaseStyle';
import ContactsPage from '../pages/ContactsPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import AppBar from '../components/AppBar';
import { getCurrentUser } from 'redux/auth-operations';
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <>
      <GlobalStyle />
      <AppBar />
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="*" element={<Navigate to="login" />} />
      </Routes>

      <Toaster />
    </>
  );
};

export default App;
