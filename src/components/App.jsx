import Spinner from "./Spinner/Spinner";
import { List } from "redux/data/data";
import { useSelector } from "react-redux";
import RegisterContainer from "./RegisterContainer";
import Header from './Header';
// import { Routes, Route } from "react-router-dom";

export const App = () => {


   const loading = useSelector((state) => state.global.isLoading)
 
  return (
    
    <>
        <Header />
        {/* <RegisterPage /> */}
      {loading && <Spinner />}
      <List/>   
      <RegisterContainer/>
      <Header />
    </>
  );
};
