import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './components/Users';
import User from './components/User';
import FormikPage from './components/Formik';
import { UserProvider } from './context/UserContext'

ReactDOM.render(
  <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} > {/* v6 ile beraber exact kullanmamıza gerek kalmıyor en azından Home Page de. Ayrıca diğer routelar ile bağlantılı olmasını istiyorsak onları sarıyoruz.*/}
          <Route path="users" element={<Users />} />
          <Route path="/user/:id" element={<User />} /> {/* eğer farklı bir url olmasını istiyorsak path başına  / koyuyoruz. koymazsak users/user/:id olur */}
          <Route path="formik" element={<FormikPage />} />
          <Route path="*" element={<h1>Sayfa Yok :((</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </UserProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
