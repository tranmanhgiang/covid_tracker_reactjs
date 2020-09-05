import { combineReducers } from 'redux';
import confirmed from './confirmed';
import recovered from './recovered';
import deaths from './deaths';
import lastupdate from './lastUpdate';
import countries from './countries';
import news from './news';
import countryoption from './countryontion';
import countrydetail from './countrydetail';

const myReducer = combineReducers({
    confirmed,
    recovered, 
    deaths,
    lastupdate,
    countries,
    news,
    countryoption,
    countrydetail
});

export default myReducer;