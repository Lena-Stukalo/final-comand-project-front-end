import style from "./Calendar.module.css";
import arrow from "./image/Vector.png"


const Calendar = () => {
    return (      
              <div className={style.wrappCalendar}>
                        <div className={style.wrapperMonth}>
                           
            <p className={style.calendarText}>Month</p>
            <img src={arrow} alt=">" />
        </div>
        <div className={`${style.wrapperMonth} ${style.wrapperYear}`}>
            <p className={style.calendarText}>Year</p>
            <img src={arrow} alt=">" />
        </div>  
                </div> 
        
    )
}

export default Calendar;