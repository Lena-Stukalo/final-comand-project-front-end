
import Spinner from "./Spinner/Spinner";
import Statistics from "./Statistics/Statistics";
// import { List } from "redux/data/data";
import { useSelector } from "react-redux";

export const App = () => {


   const loading = useSelector((state) => state.global.isLoading)
 
  return (
    <div>
      {loading && <Spinner />}
      <Statistics></Statistics>
      {/* <List/> */}
    </div>
  );
};
