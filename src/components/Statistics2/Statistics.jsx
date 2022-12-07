import style from "./Statistics.module.css"
import { Link } from "react-router-dom";
import homeImg from "./image/Exclude.png";
import chartImg from "./image/Exclude1.png";
import currencyImg from "./image/Exclude2.png";
import { nanoid } from "nanoid";
import { PieChart } from 'react-minimal-pie-chart';
import arrow from "./image/Vector.png"


const Statistics = () => {
    
    

    const id = nanoid()  


    const statistic = [
    { title: "Main expenses", value: 8700, color: "#FED057" },        
        { title: "Products", value: 3800, color: "#FFD8D0"},
        {title: "Car", value: 1500, color: "#FD9498" },
        {title: "Self care", value: 800, color: "#C5BAFF" },
        { title: "Child care", value: 2200, color: "#6E78E8" },
        { title: "Household products", value: 300, color: "#4A56E2"  },
        { title: "Education", value: 3400, color: "#81E1FF" },
        { title: "Leisure", value: 1230, color: "#24CCA7"  },
        { title: "Other expenses", value: 610, color: "#00AD84" },
  ]

    const total =  statistic.reduce((total, expenses) => {
  return total + expenses.value;
}, 0);    

   

    return (
        <div className={style.Wrapper}>
        <div className={style.container}>       
        
        <div className={style.wrapperLeft}>
        
        <div className={style.navLinkMiddle}>
        <Link className={style.link} ><img width={18} height={18} src={homeImg} alt="home" /><p className={style.linkText}>Home</p></Link>
        <Link className={`${style.link} ${style.linkChart}`}><img width={18} height={18} src={chartImg} alt="chart" /><p className={style.linkText}>Statistics</p></Link>
        
            </div>
            <div className={style.navLinkSmall}>
        <Link><img src={homeImg} alt="home" /></Link>
        <Link className={style.link}><img src={chartImg} alt="chart" /></Link>
        <Link className={`${style.link} ${style.linkCurrency}`}><img src={currencyImg} alt="currency" /></Link>
            </div>
            <div className={style.balanceWrapper}>
            <p className={style.balanceTitle}>Ваш баланс</p>
            <p className={style.balance}>₴ 24 000.00</p>
            </div>
            <div>
                <h2 className={style.statisticTitle}>Statistics</h2>
         <div className={style.pieChartWrapper}>
               <PieChart lineWidth={30} className={style.pieChart}
            data={statistic}
            
            />
            
            <p className={style.statisticValue}>₴ 24 000.00</p>
                </div>  
            </div>    
            </div>    

        <div className={style.wrapperRight}>
            <div className={style.course}>
                <div className={style.currency}>
                    <p className={style.courseText}>Currency</p>
                    <p className={style.courseTextUsd}>USD</p>
                    <p className={style.courseTextEur}>EUR</p>
                </div>

                <div className={style.purchase}> 
                    <p className={style.courseText}>Purchase</p>
                    <p className={style.courseTextUsd}>27.55</p>
                    <p className={style.courseTextEur}>30.00</p>
                </div>

                <div>
                    <p className={style.courseText}>Sale</p>
                    <p className={style.courseTextUsd}>27.65</p>
                    <p className={style.courseTextEur}>30.10</p>
                </div>                
                
            </div>
                <div className={style.wrappCalendar}>
                     <div className={style.wrapperMonth}>
            <p>Month</p>
            <img src={arrow} alt=">" />
        </div>
        <div className={`${style.wrapperMonth} ${style.wrapperYear}`}>
            <p>Year</p>
            <img src={arrow} alt=">" />
        </div>  
                </div> 

                      <div className={style.wrapperCategory}>
            <p className={style.categoryTextItem}>Category</p>
            <p className={style.categoryTextItem}>Sum</p>
        </div>              
       
        
      <div>
        <ul className={style.statisticList}>{statistic.map(item => (<li key={id} className={style.statisticItems}>   
            
            <div style={{ backgroundColor: item.color }} className={style.itemsColor}></div>
            <p className={style.categoryText}>{item.title}</p>
            <p className={style.categorySum}>{item.value}</p>
        </li>))}
        </ul>
            
                <div className={style.expensesWrapper}>
            <p className={style.statisticTotalText}>Expenses:</p>
            <p>{total}</p>
        </div>
        <div className={style.expensesWrapper}>
            <p className={style.statisticTotalText}>Income:</p>
            <p>{total}</p>
        </div>
        </div>
        
        </div>

        

        <div className={style.wrapperLeftDesctop}>
            <div className={style.navLinkMiddle}>
        <Link className={style.link} ><img width={18} height={18} src={homeImg} alt="home" /><p className={style.linkText}>Home</p></Link>
        <Link className={`${style.link} ${style.linkChart}`}><img width={18} height={18} src={chartImg} alt="chart" /><p className={style.linkText}>Statistics</p></Link>
        
            </div>
            <div className={style.navLinkSmall}>
        <Link><img src={homeImg} alt="home" /></Link>
        <Link className={style.link}><img src={chartImg} alt="chart" /></Link>
        <Link className={`${style.link} ${style.linkCurrency}`}><img src={currencyImg} alt="currency" /></Link>
            </div>
            <div className={style.balanceWrapper}>
            <p className={style.balanceTitle}>Ваш баланс</p>
            <p className={style.balance}>₴ 24 000.00</p>
            </div>
        
            <div className={style.course}>
                <div className={style.currency}>
                    <p className={style.courseText}>Currency</p>
                    <p className={style.courseTextUsd}>USD</p>
                    <p className={style.courseTextEur}>EUR</p>
                </div>

                <div className={style.purchase}> 
                    <p className={style.courseText}>Purchase</p>
                    <p className={style.courseTextUsd}>27.55</p>
                    <p className={style.courseTextEur}>30.00</p>
                </div>

                <div>
                    <p className={style.courseText}>Sale</p>
                    <p className={style.courseTextUsd}>27.65</p>
                    <p className={style.courseTextEur}>30.10</p>
                </div>                
                
            </div>

        </div>

        <div className={style.wrapperRightDesctop}>
             <div className={style.statisticWrapper}>
                <h2 className={style.statisticTitle}>Statistics</h2>
         <div className={style.pieChartWrapper}>
               <PieChart lineWidth={30} className={style.pieChart}
            data={statistic}
            
            />
            
            <p className={style.statisticValue}>₴ 24 000.00</p>
                </div>  
            </div>
            <div className={style.wrapperCalendar}>
          <div className={style.wrappCalendar}>
                     <div className={style.wrapperMonth}>
            <p>Month</p>
            <img src={arrow} alt=">" />
        </div>
        <div className={`${style.wrapperMonth} ${style.wrapperYear}`}>
            <p>Year</p>
            <img src={arrow} alt=">" />
        </div>  
                </div> 

                      <div className={style.wrapperCategory}>
            <p className={style.categoryTextItem}>Category</p>
            <p className={style.categoryTextItem}>Sum</p>
        </div>              
       
        
      <div>
        <ul className={style.statisticList}>{statistic.map(item => (<li key={id} className={style.statisticItems}>   
            
            <div style={{ backgroundColor: item.color }} className={style.itemsColor}></div>
            <p className={style.categoryText}>{item.title}</p>
            <p className={style.categorySum}>{item.value}</p>
        </li>))}
        </ul>
            
                <div className={style.expensesWrapper}>
            <p className={style.statisticTotalText}>Expenses:</p>
            <p>{total}</p>
        </div>
        <div className={style.expensesWrapper}>
            <p className={style.statisticTotalText}>Income:</p>
            <p>{total}</p>
        </div>
        </div>
            
        </div>
       </div>
            </div>
            </div>)
}

export default Statistics;