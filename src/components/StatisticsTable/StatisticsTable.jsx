import { useSelector } from 'react-redux';
import style from './StatisticsTable.module.css';
import TransSelectors from 'redux/transactions/transactionSelector';
const StatisticsTable = ({ statistic }) => {
  const income = useSelector(TransSelectors.getDetailsIncome);
  const expenses = useSelector(TransSelectors.getDetailsExpense);
  // const statistic = [
  //   { title: 'Main expenses', value: 8700, color: '#FED057' },
  //   { title: 'Products', value: 3800, color: '#FFD8D0' },
  //   { title: 'Car', value: 1500, color: '#FD9498' },
  //   { title: 'Self care', value: 800, color: '#C5BAFF' },
  //   { title: 'Child care', value: 2200, color: '#6E78E8' },
  //   { title: 'Household products', value: 300, color: '#4A56E2' },
  //   { title: 'Education', value: 3400, color: '#81E1FF' },
  //   { title: 'Leisure', value: 123, color: '#24CCA7' },
  //   { title: 'Other expenses', value: 610, color: '#00AD84' },
  // ];

  return (
    <div>
      <table className={style.transactionHistory}>
        <thead>
          <tr className={style.tr}>
            {/* <th><p>Category</p><p>Sum</p></th>           */}
            <th className={`${style.categoryTh} ${style.th}`}>
              <div className={style.categoryTitleWrapper}>
                <p className={style.categoryTitle}>Category</p>
              </div>
            </th>
            <th className={`${style.sumTh} ${style.th}`}>
              <div className={style.sumTitleWrapper}>
                <p className={style.sumTitle}>Sum</p>
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          {statistic.map(item => (
            <tr key={item.color} className={style.tr}>
              <td className={style.td}>
                <div className={style.statisticWrappers}>
                  <div
                    className={style.statisticColors}
                    style={{ backgroundColor: item.color }}
                  ></div>

                  <p className={style.categoryText}>{item.title}</p>
                </div>
              </td>
              {/* <td>{item.title}</td> */}
              {/* <td><p className={style.categoryValue}>{item.value}</p></td> */}
              <td className={style.td}>
                <div className={style.categoryWrappers}>
                  <p className={style.categoryValue}>{item.value}</p>
                </div>
              </td>
            </tr>
          ))}
          <tr className={style.tr}>
            <td className={style.td}>
              <p className={style.incomeText}>Expenses:</p>
            </td>
            <td className={style.td}>
              <div className={style.valueWrapp}>
                <p className={style.expensesValue}>{expenses}</p>
              </div>
            </td>
          </tr>
          <tr className={style.tr}>
            <td className={style.td}>
              <p className={style.incomeText}>Income:</p>
            </td>
            <td className={style.td}>
              <div className={style.valueWrapp}>
                <p className={style.incomeValue}>{income}</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatisticsTable;
