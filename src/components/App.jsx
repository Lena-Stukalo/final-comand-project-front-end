import { Routes, Route } from 'react-router-dom';
import Media from 'react-media';
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
        <Route element={<PublicRoute />}>
          <Route path="login" element={<Header />} />
          <Route path="register" element={<RegisterContainer />} />
        </Route>
        <Route element={<PrivatRoute />}>
          <Route path="home" element={<Header />} />
          <Route path="diagram" element={<Header />} />
          <Media
            query="(max-width: 767px)"
            render={() => <Route path="diagram" element={<Header />} />}
          />
        </Route>
      </Routes>
      {/* {loading && <Spinner />}
        <List/>   
        <RegisterContainer/>
        <Header /> */}
    </div>
  );
};
