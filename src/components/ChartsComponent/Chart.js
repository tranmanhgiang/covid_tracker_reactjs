import React from 'react';
import { connect } from 'react-redux';
import * as actions from './../../actions/countries';
import * as Actions from './../../actions/index';
import { Bar } from 'react-chartjs-2';
import './Chart.css';

class CountryOption extends React.Component {
    
    componentDidMount() {
        this.props.getCountries();
        this.props.getConfirmed();
        this.props.getRecovered();
        this.props.getDeaths();
    }
    
    showCountryOption = countries => {
        var result = null;
        if(countries.length > 0) {
            result = countries.map((country, index) => {
                return <option key={index} value={country.iso2}>{country.name}</option>
            });
        }
        return result;
    }

    onHandleChange = (e) => {
        this.props.getDetail(e.target.value);
    }


    
    render() {
        var { confirmed, recovered, deaths } = this.props.detail;

            const data = {
                labels: ['Confirmed', 'Recovered', 'Deaths'],
                datasets: [
                {
                    label: 'People',
                    backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                    data: [
                        confirmed !== undefined ? (confirmed.value) : this.props.confirmed,
                        recovered !== undefined ? (recovered.value) : this.props.recovered,
                        deaths !== undefined ? (deaths.value) : this.props.deaths
                    ],
                },
                ],
            }
        console.log(this.props.countries);
        return (
            <div className="App">
                <h1>Chon quoc gia</h1>

                <select className="option" onChange={this.onHandleChange}>
                    <option value=''>Global</option>
                    {this.showCountryOption(this.props.countries)}
                </select>

                <div className="container chart">
                    <Bar data={data}/>
                </div>
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        countries : state.countryoption,
        detail : state.countrydetail,
        confirmed : state.confirmed,
        recovered : state.recovered,
        deaths : state.deaths,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getCountries : () => {
            dispatch(actions.getCountriesRequest());
        },
        getDetail : (country) => {
            dispatch(actions.countryDetailRequest(country));
        },
        getConfirmed : () => {
            dispatch(Actions.getConfirmedRequest());
        },
        getRecovered : () => {
            dispatch(Actions.getRecoveredRequest());
        },
        getDeaths : () => {
            dispatch(Actions.getDeathsRequest());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryOption);