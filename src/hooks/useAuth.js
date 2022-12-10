import { useSelector } from "react-redux";

const useAuth = () => {

    const isAuth = useSelector(state => state.auth.isLogin);
    return isAuth;
};

export default useAuth;