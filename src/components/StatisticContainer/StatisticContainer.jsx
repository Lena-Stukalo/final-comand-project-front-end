import Diagram from 'components/Diagram/Diagram';
import Calendar from '../Calendar/Calendar';
import StatisticsTable from 'components/StatisticsTable/StatisticsTable';
import css from './StatisticContainer.module.css';
export const StatisticContainer = () => {
  return (
    <div className={css.container}>
      <Diagram />
      <div>
        <Calendar />
        <StatisticsTable />
      </div>
    </div>
  );
};
export default StatisticContainer;
