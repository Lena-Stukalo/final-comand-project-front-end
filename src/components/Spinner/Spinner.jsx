import { RotatingLines } from 'react-loader-spinner';
import style from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={style.spinner}>
      <RotatingLines
        strokeColor="green"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};

export default Spinner;
// const loading = useSelector(state => state.global.isLoading);
