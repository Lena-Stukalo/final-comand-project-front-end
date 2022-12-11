import StatisticContainer from 'components/StatisticContainer/StatisticContainer';
import css from './StatisticPage.module.css';
import { useSelector } from 'react-redux';
import AuthSelectors from 'redux/auth/authSelectors';

export const StatisticPage = () => {
  const isRefreshing = useSelector(AuthSelectors.getIsRefreshing);
  return isRefreshing ? (
    <b>Refreshing data...</b>
  ) : (
    <div>
      <h2 className={css.statisticTitle}>Statistics</h2>
      <StatisticContainer />
    </div>
  );
};
export default StatisticPage;
