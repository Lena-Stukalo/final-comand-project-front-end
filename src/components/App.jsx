import Spinner from "./Spinner/Spinner";
import { List } from "redux/data/data";
import { useSelector } from "react-redux";
import Header from './Header';
import RegisterPage from "pages/RegisterPage";


export const App = () => {


   const loading = useSelector((state) => state.global.isLoading)
 
  return (
    
    <>
        <Header />
      {loading && <Spinner />}
      <List/>   
      <RegisterPage/>
      <Header />
    </>
  );
};
