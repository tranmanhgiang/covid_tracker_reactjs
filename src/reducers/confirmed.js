import * as Types from './../constants/ActionTypes';

const initialState = null;

const myReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.CONFIRMED :
            state = action.confirmedInfo;
            return state;

        default :
            return state;
    }
}

export default myReducer;