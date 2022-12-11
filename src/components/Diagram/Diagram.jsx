import { PieChart } from 'react-minimal-pie-chart';
import { useSelector } from 'react-redux';
import AuthSelectors from '../../redux/auth/authSelectors.js';
import style from './Diagram.module.css';

const Diagram = ({ statistic }) => {
  return (
    <div className={style.container}>
      <div className={style.pieChartWrapper}>
        <PieChart lineWidth={30} className={style.pieChart} data={statistic} />

        <p className={style.statisticValue}>
          {useSelector(AuthSelectors.getUserBalance)}
        </p>
      </div>
    </div>
  );
};

export default Diagram;
