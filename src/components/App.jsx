
import Spinner from "./Spinner/Spinner";
import Statistics from "./Statistics/Statistics";
// import { List } from "redux/data/data";
import { useSelector } from "react-redux";
import RegisterContainer from "./RegisterContainer";
import Header from './Header';

export const App = () => {


   const loading = useSelector((state) => state.global.isLoading)
 
  return (

    <>
      {loading && <Spinner />}
      <Statistics/>
      {/* <List/>      */}
      {/* <RegisterContainer/>
      <Header /> */}
    </>


  );
};
