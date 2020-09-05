import * as Types from './../constants/ActionTypes';
import { CallApi, callApiCountry } from './../api/CallApi';

export const countryDetailRequest = country => {
    return async dispatch => {
        if(country !== '') {
            var result = await callApiCountry(`${country}`, 'GET', null);
            return dispatch(countryDetail(result.data));
        }
    }
}

export const countryDetail = countrydetail => {
    return {
        type : Types.GETDETAIL,
        countrydetail
    }
}


export const getCountriesRequest = () => {
    return dispatch => {
        return CallApi('countries', 'GET', null).then(res => {
            dispatch(getCountries(res.data.countries));
        });
    } 
}

export const getCountries = countryoption => {
    return {
        type : Types.COUNTRYOPTION,
        countryoption
    }
}