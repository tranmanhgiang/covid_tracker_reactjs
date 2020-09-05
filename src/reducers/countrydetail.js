import * as Types from '../constants/ActionTypes';

const initialState = {};

const myReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.GETDETAIL:
            state = action.countrydetail;
            return {...state};
        
        default :
            return state;
    }
}

export default myReducer;