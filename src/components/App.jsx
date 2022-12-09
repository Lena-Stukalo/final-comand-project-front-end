import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RegisterContainer from './RegisterContainer';
import Header from './Header';
import { Dashboard } from './dashbord/Dashboard';
import PrivatRoute from './PrivatRoute';
import PublicRoute from './PublicRoute';
import { Currency } from './currency/Currency';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="login" element={<Header />} />
          <Route path="register" element={<RegisterContainer />} />
        </Route>
        <Route element={<PrivatRoute />}>
          <Route path="/" element={<Dashboard />}>
            <Route path="home" element={<Header />} />
            <Route path="diagram" element={<Header />} />
            <Route path="currency" element={<Currency />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
