import style from './Calendar.module.css';
import arrow from './image/Vector.png';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { useState } from 'react';

const Calendar = ({ setMonthAmount, setYearAmount }) => {
  const [month, setMonth] = useState(false);
  const [year, setYear] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(true);

  const toggleMonth = () => {
    setMonth(!month);
    setYear(false);
  };

  const toggleYear = () => {
    setYear(!year);
    setMonth(false);
  };
  const onMounthCange = e => {
    setYearAmount('');
    let choosenOne = e._d.getMonth() + 1;
    if (choosenOne < 10) {
      choosenOne = '0' + choosenOne;
    }
    setMonthAmount(choosenOne.toString());
  };

  const onYearChange = e => {
    setMonthAmount('');
    const choosenOne = e._d.getFullYear().toString();
    setYearAmount(choosenOne);
  };
  const isValidData = data => {
    const currentDate = new Date();
    return currentDate > data._d;
  };

  const toggleCalendar = e => {
    const classTable = e.target.getAttribute('class');

    if (classTable === 'rdtMonth') {
      setOpenCalendar(false);
    } else if (classTable === 'rdtYear') {
      setOpenCalendar(false);
    } else {
      setOpenCalendar(true);
    }
  };

  return (
    <div onClick={toggleCalendar} className={style.wrappCalendar}>
      <div>
        <div onClick={toggleMonth} className={style.wrapperMonth}>
          <p className={style.calendarText}>Month</p>
          <img src={arrow} alt=">" />
        </div>
        {month && (
          <Datetime
            open={openCalendar}
            closeOnSelect={true}
            timeFormat={false}
            dateFormat="MM"
            onChange={onMounthCange}
            isValidDate={isValidData}
          />
        )}
      </div>

      <div>
        <div
          onClick={toggleYear}
          className={`${style.wrapperMonth} ${style.wrapperYear}`}
        >
          <p className={style.calendarText}>Year</p>
          <img src={arrow} alt=">" />
        </div>
        {year && (
          <Datetime
            open={openCalendar}
            closeOnSelect={true}
            className={style.datetimeYear}
            dateFormat="YYYY"
            timeFormat={false}
            onChange={onYearChange}
            isValidDate={isValidData}
          />
        )}
      </div>
    </div>
  );
};

export default Calendar;
