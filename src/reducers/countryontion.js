import * as Types from '../constants/ActionTypes';

const initialState = [];

const myReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.COUNTRYOPTION:
            state = action.countryoption;
            return [...state];
        
        default :
            return state;
    }
}

export default myReducer;