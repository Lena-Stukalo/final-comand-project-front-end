import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Spinner from './Spinner/Spinner';
import { List } from 'redux/data/data';
import RegisterContainer from './RegisterContainer';
import Header from './Header';
import PrivatRoute from './PrivatRoute';
import PublicRoute from './PublicRoute';

export const App = () => {
  // const loading = useSelector(state => state.global.isLoading);

  return (
    <div>
      <Routes>
        <Route path="/">
          <Route element={<PublicRoute />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<RegisterContainer />} />
          </Route>
          <Route element={<PrivatRoute />}>
            <Route path="home" element={<Currency />} />
            <Route path="diagram" element={<Currency />} />
          </Route>
        </Route>
      </Routes>
      {/* {loading && <Spinner />}
        <List/>   
        <RegisterContainer/>
        <Header /> */}
    </div>
  );
};
