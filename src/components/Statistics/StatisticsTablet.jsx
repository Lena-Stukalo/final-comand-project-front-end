import style from "./Statistics.module.css"
import { Link } from "react-router-dom";
import homeImg from "./image/Exclude.png";
import chartImg from "./image/Exclude1.png";   


const StatisticsTablet = () => {
    return (
        <>          
        
        <div className={style.wrapperLeft}>        
        <div className={style.navLinkMiddle}>
        <Link className={style.link} ><img width={18} height={18} src={homeImg} alt="home" /><p className={style.linkText}>Home</p></Link>
        <Link className={`${style.link} ${style.linkChart}`}><img width={18} height={18} src={chartImg} alt="chart" /><p className={style.linkText}>Statistics</p></Link>
        
            </div>           
        
                    </div>              
                                
         
        </>
    )
}

export default StatisticsTablet;