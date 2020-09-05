import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { connect } from 'react-redux';
import * as actions from './../../actions/index';

class CountryLists extends React.Component {

    componentDidMount() {
      this.props.getCountries();
    }

    getCountries = (countries) => {
      var item = [];
      if(countries.length > 0) {
        item = countries.map((country, index) => {
          const ens = country.iso2 ? country.iso2.toLowerCase() : country.iso2;
          return {
            key : index,
            ensign: <img src={`https://disease.sh/assets/img/flags/${ens}.png`} alt="" width="30"/>,
            country: country.countryRegion,
            province : country.provinceState,
            confirmed: <span className="text-secondary">{country.confirmed}</span>,
            recovered: <span className="text-success">{country.recovered}</span>,
            deaths: <span className="text-danger">{country.deaths}</span>
          };
        });
      }
      return item;
    }

    render() {
      const datatable = {
            columns: [
            {
              label : 'Quoc ky',
              field : 'ensign',
              width : 50,
              sort: 'disabled'
            },
            {
              label: 'Quoc gia',
              field: 'country',
              width: 150,
              attributes: {
                'aria-controls': 'DataTable',
                'aria-label': 'Country',
              },
            },
            {
              label : 'Tieu bang',
              field : 'province',
              width : 50,
            },
            {
              label: 'So ca nhiem',
              field: 'confirmed',
              width: 200,
              sort: 'disabled'
            },
            {
              label: 'Da khoi',
              field: 'recovered',
              width: 200,
              sort: 'disabled'
            },
            {
              label: 'Tu vong',
              field: 'deaths',
              width: 100,
              sort: 'disabled'
            }
          ],
          rows: this.getCountries(this.props.countries)
        }
        return (
            <MDBDataTableV5
              hover
              entriesOptions={[10, 20, 25, 50, 100]}
              entries={10}
              pagesAmount={4}
              data={datatable}
              pagingTop
              searchTop
              searchBottom={false}
            />
          );
    }
}


const mapStateToProps = state => {
  return {
    countries : state.countries
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    getCountries : () => {
      dispatch(actions.getCountriesRequest());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryLists);
