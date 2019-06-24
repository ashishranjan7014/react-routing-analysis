import React, { useState,useReducer, useEffect } from "react";
import { Redirect } from "react-router-dom";
import reducer from "../store/reducers/reducers";
import { actionTypes } from "../store/constant/constant";
import { GlobalState } from "../store/globalstate/globalstate";


export default () => {

    const [state, dispatch] = useReducer(reducer, GlobalState);
    const [redirect, setRedirect] = useState(false);


    const Increment = () => {
        dispatch({ type: actionTypes.INCREMENT });
    }

    const Decrement = () => {
        dispatch({ type: actionTypes.DECREMENT });
    }

    useEffect(() => {
        setRedirect(true);
        // console.log(redirect);
    },[redirect])

    // if(redirect){
    //     console.log(redirect)
    //     return (
    //         <Redirect to="/login"></Redirect>
    //     );
    // }

    return (
        <>
            Count: {state.count}
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
        </>
    );
}