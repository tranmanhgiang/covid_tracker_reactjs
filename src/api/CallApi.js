import axios from 'axios';
import { COVID_URL, NEWS_URL } from '../constants/Config';

export function CallApi(endpoint, method, body) {
    return axios({
        method : method,
        url : `${COVID_URL}/${endpoint}`,
        data : body
    }).catch(err => {
        console.log(err);
    });
}


export function CallApiNews(method, body) {
    return axios({
        method : method,
        url : NEWS_URL,
        data : body
    }).catch(err => {
        console.log(err);
    });
}

export function callApiCountry(endpoint, method, body) {
    return axios({
        method : method,
        url : `${COVID_URL}/countries/${endpoint}`,
        data : body
    }).catch(err => {
        console.log(err);
    });
}