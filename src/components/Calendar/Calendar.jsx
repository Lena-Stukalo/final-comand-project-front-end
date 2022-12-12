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
    const months = [
      { name: 'Jan', number: '01' },
      { name: 'Feb', number: '02' },
      { name: 'Mar', number: '03' },
      { name: 'Apr', number: '04' },
      { name: 'May', number: '05' },
      { name: 'Jun', number: '06' },
      { name: 'Jul', number: '07' },
      { name: 'Aug', number: '08' },
      { name: 'Sep', number: '09' },
      { name: 'Oct', number: '10' },
      { name: 'Nov', number: '11' },
      { name: 'Dec', number: '12' },
    ];
    const choosenOne = e._d.toString().slice(4, 7);
    const number = months.find(month => month.name === choosenOne);
    setMonthAmount(number.number);
  };

  const onYearChange = e => {
    const choosenOne = e._d.toString().slice(11, 15);
    setYearAmount(choosenOne);
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
          />
        )}
      </div>
    </div>
  );
};

export default Calendar;
