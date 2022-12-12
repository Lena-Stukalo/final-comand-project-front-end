import StatisticContainer from 'components/StatisticContainer/StatisticContainer';
import css from './StatisticPage.module.css';
import { useSelector } from 'react-redux';
import AuthSelectors from 'redux/auth/authSelectors';
import Spinner from 'components/Spinner/Spinner';

export const StatisticPage = () => {
  const isRefreshing = useSelector(AuthSelectors.getIsRefreshing);
  return isRefreshing ? (
    <Spinner />
  ) : (
    <div className={css.container}>
      <h2 className={css.statisticTitle}>Statistics</h2>
      <StatisticContainer />
    </div>
  );
};
export default StatisticPage;
