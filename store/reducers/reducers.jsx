import {actionTypes} from "../constant/constant";

// const initialState = { count: 0 };

export default (state, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT :
            return { count: state.count + 1 };
        case actionTypes.DECREMENT :
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}