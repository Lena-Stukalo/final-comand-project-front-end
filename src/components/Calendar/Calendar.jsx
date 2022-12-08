import style from "./Calendar.module.css";
import arrow from "./image/Vector.png";
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css"
import { useState } from "react";


const Calendar = () => {

    const [month, setMonth] = useState(false);
    const [year, setYear] = useState(false);

    const toggleMonth = (e) => {        
        setMonth(!month)
        setYear(false)
    }

    const toggleYear = () => {
        setYear(!year)
        setMonth(false)
    }

   

    
    

    return (      
        
             <div className={style.wrappCalendar}>
            <div>
                            <div onClick={toggleMonth} className={style.wrapperMonth}>
                           
            <p className={style.calendarText}>Month</p>
                <img src={arrow} alt=">" />
                
                </div>
                {month && <Datetime timeFormat={false}  open={true} className={style.datetime} />}
            </div>
            
            <div>
                <div onClick={toggleYear} className={`${style.wrapperMonth} ${style.wrapperYear}`}>
            <p className={style.calendarText}>Year</p>
            <img src={arrow} alt=">" />
            </div>  
            {year && <Datetime className={style.datetimeYear} dateFormat="YYYY" timeFormat={false} open={true} />}
        </div>
            </div> 
            
        
    )
}

export default Calendar;