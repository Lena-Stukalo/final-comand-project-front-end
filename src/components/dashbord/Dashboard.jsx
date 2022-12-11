import { Outlet } from 'react-router-dom';
// import HomeTab from 'components/HomeTab/HomeTab';

export const Dashboard = () => {
  return (
    <div>
      <p>{'Dashboard'}</p>
      {/* <HomeTab data={data} /> */}
      <Outlet />
    </div>
  );
};
