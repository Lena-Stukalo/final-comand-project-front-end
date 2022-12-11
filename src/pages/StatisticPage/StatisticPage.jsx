import StatisticContainer from 'components/StatisticContainer/StatisticContainer';
import css from './StatisticPage.module.css';

export const StatisticPage = () => {
  return (
    <div>
      <h2 className={css.statisticTitle}>Statistics</h2>
      <StatisticContainer />
    </div>
  );
};
export default StatisticPage;
