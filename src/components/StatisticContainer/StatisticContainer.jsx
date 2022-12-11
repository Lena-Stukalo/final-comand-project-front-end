import Diagram from 'components/Diagram/Diagram';
import Calendar from '../Calendar/Calendar';
import StatisticsTable from 'components/StatisticsTable/StatisticsTable';
import css from './StatisticContainer.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import operations from 'redux/transactions/transactionsOperations';
import TransSelectors from 'redux/transactions/transactionSelector';

export const StatisticContainer = () => {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operations.categories());
    dispatch(operations.statistic());
  }, [dispatch]);
  const details = useSelector(TransSelectors.getDetails);
  const categories = useSelector(TransSelectors.getCategories);

  const MakeStatistic = (categories, details) => {
    if (categories && details) {
      const statistic = categories.map(category => {
        const value = details.find(detail => detail.category === category.name);
        if (!value) {
          return { title: category.name, value: 0, color: category.color };
        }
        return {
          title: category.name,
          value: value.sum,
          color: category.color,
        };
      });
      return statistic;
    }
    return [];
  };

  const statistic = MakeStatistic(categories, details);

  return (
    <div className={css.container}>
      <Diagram statistic={statistic} />
      <div>
        <Calendar setMonthAmount={setMonth} setYearAmount={setYear} />
        <StatisticsTable statistic={statistic} />
      </div>
    </div>
  );
};
export default StatisticContainer;
