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

    // const statistic = [
    //     { category: "Main expenses", sum: 8700, color: "#FED057" },        
    //     { category: "Products", sum: 3800, color: "#FFD8D0", },
    //     {category: "Car", sum: 1500, color: "#FD9498", },
    //     {category: "Self care", sum: 800, color: "#C5BAFF", },
    //     { category: "Child care", sum: 2200, color: "#6E78E8",  },
    //     { category: "Household products", sum: 300, color: "#4A56E2",  },
    //     { category: "Education", sum: 3400, color: "#81E1FF", },
    //     { category: "Leisure", sum: 1230, color: "#24CCA7",  },
    //     { category: "Other expenses", sum: 610, color:"#00AD84"  },
        
    // ]


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

    
    
    // const colorList = [

    //     "#FED057",
    //     "#FFD8D0",
    //     "#FD9498",
    //     "#C5BAFF",
    //     "#6E78E8",
    //     "#4A56E2",
    //     "#81E1FF",
    //     "#24CCA7",
    //     "#00AD84"
    // ]

   

    return (<div className={style.container}>
       
        <div className={style.wrapper}>
            <div className={style.wrapperLeft}>
        <div className={style.navLink}>
        <Link><img src={homeImg} alt="home" /></Link>
        <Link className={style.link}><img src={chartImg} alt="chart" /></Link>
        <Link className={style.link}><img src={currencyImg} alt="currency" /></Link>
        </div>
        <h2 className={style.statisticTitle}>Statistics</h2>
         <div className={style.pieChartWrapper}>
               <PieChart lineWidth={30} className={style.pieChart}
            data={statistic}
            
            />
            
            <p className={style.statisticValue}>₴ 24 000.00</p>
                </div>      
            </div>    

                 <div className={style.wrapperRight}>
                <div className={style.wrappCalendar}>
                     <div className={style.wrapperMonth}>
            <p>Month</p>
            <img src={arrow} alt=">" />
        </div>
        <div className={style.wrapperMonth}>
            <p>Year</p>
            <img src={arrow} alt=">" />
        </div>  
                </div> 
        
       
        
      
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
    </div>)
}

export default Statistics;