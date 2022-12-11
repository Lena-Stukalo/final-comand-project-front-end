import { PieChart } from 'react-minimal-pie-chart';
import style from './Diagram.module.css';

const Diagram = () => {
  const statistic = [
    { title: 'Main expenses', value: 8700, color: '#FED057' },
    { title: 'Products', value: 3800, color: '#FFD8D0' },
    { title: 'Car', value: 1500, color: '#FD9498' },
    { title: 'Self care', value: 800, color: '#C5BAFF' },
    { title: 'Child care', value: 2200, color: '#6E78E8' },
    { title: 'Household products', value: 300, color: '#4A56E2' },
    { title: 'Education', value: 3400, color: '#81E1FF' },
    { title: 'Leisure', value: 1230, color: '#24CCA7' },
    { title: 'Other expenses', value: 610, color: '#00AD84' },
  ];
  return (
    <div className={style.container}>
      <div className={style.pieChartWrapper}>
        <PieChart lineWidth={30} className={style.pieChart} data={statistic} />

        <p className={style.statisticValue}>₴ 24 000.00</p>
      </div>
    </div>
  );
};

export default Diagram;
