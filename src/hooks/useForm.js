import { useState } from "react";

const useForm = ({ initialState, onSubmit }) => {
    const [state, setState] = useState({ ...initialState });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ ...state });
        setState({ ...initialState })
    };
    return { state, setState, handleSubmit }
}

export default useForm;