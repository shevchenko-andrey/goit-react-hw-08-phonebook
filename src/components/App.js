import { Toaster } from 'react-hot-toast';
import { Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyle } from '../Base/BaseStyle';
import ContactsPage from '../pages/ContactsPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import AppBar from '../components/AppBar';
const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppBar />
      <Routes>
        {/* <Route path="/" element={<p>Home</p>} /> */}
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
