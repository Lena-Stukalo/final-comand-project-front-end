import style from "./StatisticsTable.module.css";
import { nanoid } from "nanoid";
const StatisticsTable = () => {

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

    const id = nanoid()     

    const total =  statistic.reduce((total, expenses) => {
  return total + expenses.value;
    }, 0);  
    
    return (<>
        
    <table className={style.transactionHistory}>
      <thead>
        <tr>
                    {/* <th><p>Category</p><p>Sum</p></th>           */}
           <th className={style.categoryTh}>Category</th>          
          <th className={style.sumTh}>Sum</th>
        </tr>
      </thead>

      <tbody>
        {statistic.map(item => (
          <tr key={id}>
                <td >
                    <div className={style.statisticWrappers}>
                        <div className={style.statisticColors} style={{ backgroundColor: item.color }}></div>
                
                    <p className={style.categoryText}>{item.title}</p>
                    </div>
                </td>
            {/* <td>{item.title}</td> */}
            <td>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  
    </>)
}

export default StatisticsTable;