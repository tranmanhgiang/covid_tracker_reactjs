import * as Types from '../constants/ActionTypes';

const initialState = [];

const myReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.COUNTRIES:
            state = action.countries;
            return [...state];

        case Types.MAKERLISTS:
            state = action.makerlists;
            return [...state];
        
        default :
            return state;
    }
}

export default myReducer;