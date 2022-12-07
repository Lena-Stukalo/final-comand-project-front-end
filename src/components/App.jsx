
import Spinner from "./Spinner/Spinner";
// import { List } from "redux/data/data";
import { useSelector } from "react-redux";
import RegisterContainer from "./RegisterContainer";
import Header from './Header';
import Statistics from "./Statistics/Statistics" 

// import StatisticsDesctop from "./Statistics2/StatisticsDesctop";

export const App = () => {


   const loading = useSelector((state) => state.global.isLoading)
 
  return (

    <>
      {loading && <Spinner />}
      <Statistics />
      {/* <StatisticsDesctop/> */}
      {/* <List/>      */}
      {/* <RegisterContainer/>
      <Header /> */}
    </>


  );
};
