import { Routes, Route } from 'react-router-dom';
import Media from 'react-media';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Spinner from './Spinner/Spinner';
import { List } from 'redux/data/data';
import RegisterContainer from './RegisterContainer';
import Header from './Header';
import { Dashboard } from './dashbord/Dashboard';
import PrivatRoute from './PrivatRoute';
import PublicRoute from './PublicRoute';

export const App = () => {
  // const loading = useSelector(state => state.global.isLoading);

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
            <Route path="currency" element={<Header />} />
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
