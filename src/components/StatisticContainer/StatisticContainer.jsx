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
  useEffect(() => {
    if (month !== '' && year !== '') {
      const params = {
        month,
        year,
      };
      dispatch(operations.statistic(params));
    }
    // if (month !== '') {
    //   const params = {
    //     month: month,
    //     year: '2022',
    //   };
    //   dispatch(operations.statistic(params));
    // }
    // if (year !== '') {
    //   const params = {
    //     year: year,
    //   };
    //   dispatch(operations.statistic(params));
    // }
  }, [month, year]);

  const dispatch = useDispatch();
  useEffect(() => {
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

  //MakeStatistic(categories, details);

  return (
    <div className={css.container}>
      <Diagram statistic={MakeStatistic(categories, details)} />
      <div className={css.tableContainer}>
        <Calendar setMonthAmount={setMonth} setYearAmount={setYear} />
        <StatisticsTable statistic={MakeStatistic(categories, details)} />
      </div>
    </div>
  );
};
export default StatisticContainer;
