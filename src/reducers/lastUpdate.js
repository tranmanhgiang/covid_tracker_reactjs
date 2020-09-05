import * as Types from '../constants/ActionTypes';

const initialState = '';

const myReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.LAST_UPDATE :
            state = action.lastupdate;
            return state;

        default :
            return state;
    }
}

export default myReducer;