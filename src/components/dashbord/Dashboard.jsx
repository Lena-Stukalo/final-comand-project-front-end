import { Outlet } from 'react-router-dom';
export const Dashboard = () => {
  return (
    <div>
      <p>{'Dashboard'}</p>
      <Outlet />
    </div>
  );
};
