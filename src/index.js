import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './components/App';
import { store } from './redux/store';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <BrowserRouter basename="/goit-react-hw-08-phonebook/">
        <App />
      </BrowserRouter>

      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
