import * as Types from './../constants/ActionTypes';
import { CallApi, CallApiNews } from './../api/CallApi';

export const getConfirmedRequest = () => {
    return dispatch => {
        return CallApi('', 'GET', null).then(res => {
            dispatch(getConfirmed(res.data.confirmed.value));
        });
    } 
}

export const getConfirmed = confirmedInfo => {
    return {
        type : Types.CONFIRMED,
        confirmedInfo
    }
}

export const getRecoveredRequest = () => {
    return dispatch => {
        return CallApi('', 'GET', null).then(res => {
            dispatch(getRecovered(res.data.recovered.value));
        });
    }
}

export const getRecovered = recoveredInfo => {
    return {
        type : Types.RECOVERED,
        recoveredInfo
    }
}

export const getDeathsRequest = () => {
    return dispatch => {
        return CallApi('', 'GET', null).then(res => {
            dispatch(getDeaths(res.data.deaths.value));
        });
    }
}

export const getDeaths = deathsInfo => {
    return {
        type : Types.DEATHS,
        deathsInfo
    }
}

export const getLastUpdateRequest = () => {
    return dispatch => {
        return CallApi('', 'GET', null).then(res => {
            dispatch(getLastUpdate(res.data.lastUpdate));
        });
    }
}

export const getLastUpdate = lastupdate => {
    return {
        type : Types.LAST_UPDATE,
        lastupdate
    }
}

export const getCountriesRequest = () => {
    return dispatch => {
        return CallApi('confirmed', 'GET', null).then(res => {
            dispatch(getCountries(res.data));
        });
    }
}

export const getCountries = countries => {
    return {
        type : Types.COUNTRIES,
        countries
    }
}

export const getNewsRequest = () => {
    return dispatch => {
        return CallApiNews('GET', null).then(res => {
            dispatch(getNews(res.data));
        });
    }
}

export const getNews = news => {
    return {
        type : Types.NEWS,
        news
    }
}

export const getMakerListRequest = () => {
    return dispatch => {
        return CallApi('confirmed', 'GET', null).then(res => {
            dispatch(getMakerList(res.data));
        }) 
    }
}

export const getMakerList = makerlists => {
    return {
        type : Types.MAKERLISTS,
        makerlists
    }
}

