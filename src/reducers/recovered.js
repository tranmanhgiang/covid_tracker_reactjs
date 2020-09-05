import * as Types from './../constants/ActionTypes';

const initialState = null;

const myReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.RECOVERED :
            state = action.recoveredInfo;
            return state;

        default :
            return state;
    }
}

export default myReducer;