import RegisterContainer from "components/RegisterContainer";
import { useDispatch, useSelector } from "react-redux";
import { register } from "redux/auth/auth-operations";
// import useAuth from "hooks/useAuth";

const RegisterPage = () => {
    const dispatch = useDispatch();
    // const isLogin = useAuth();

    const error = useSelector(state => state.auth.error || {});
    const { status, message = 'Error' } = error;

    const onRegister = (data) => {
        console.log("Register page onRegister, data: " + JSON.stringify(data));
        
        dispatch(register(data))
    };

    return (
        <>
            <RegisterContainer onSubmit={onRegister} />
            {status && <div>Error</div>}
        </>
    )
};

export default RegisterPage;
