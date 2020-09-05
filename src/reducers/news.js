import * as Types from '../constants/ActionTypes';

const initialState = [];

const myReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.NEWS :
            state = action.news.articles;
            return [...state];

        default :
            return state;
    }
}

export default myReducer;