import React from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { connect } from 'react-redux';
import * as actions from './../../actions/index';
import './ViewMap.css';

class ViewMap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                width: "100%",
                height: "100%",
                latitude: 15.9030623,
                longitude: 105.8066925,
                zoom: 1
            },
            selectedCountry : null
        };
    };

    componentDidMount() {
        this.props.getMakerLists();
    }

    onViewportChange = viewport => {
        this.setState({viewport});
    };

    onHandleClose = () => {
        this.setState({
            selectedCountry : null
        });
    }

    markerCountry = (data) => {
        var result = null;
        if(data.length > 0) {
            result = data.map((d, index) => {
                return ((d.lat !== null && d.long !== null) ?
                        <Marker 
                                key={index}
                                latitude={d.lat}
                                longitude={d.long}
                            >
                            <span 
                                className="marker"
                                onClick={e => {
                                    e.preventDefault();
                                    this.setState({
                                        selectedCountry : d
                                    });
                                }}
                                >
                                    <i className="fas fa-map-marker-alt marker" />
                            </span>    
                        </Marker>
                 : null);
            });
        }
        return result;
    }

    render() {
        const markerList = this.props.makerlists;
        const { selectedCountry } = this.state;
        return (
            <div className="col-xl-7 px-lg-5 px-xl-5">
                <div className="m-3 map">
                <ReactMapGL {...this.state.viewport}
                    mapStyle="mapbox://styles/mapbox/streets-v11"
                    mapboxApiAccessToken="pk.eyJ1IjoidG1nLXVldCIsImEiOiJja2U4bHcyb20xeHR3MzBzenlxdjV6aDJpIn0.OhYct41NJEtAIwmMZue5DQ"
                    onViewportChange={(viewport => this.onViewportChange(viewport))}
                >
                    {this.markerCountry(markerList)}
                    {selectedCountry ? (
                        <Popup latitude={selectedCountry.lat} longitude={selectedCountry.long} onClose={this.onHandleClose}>
                            <h6>
                                {selectedCountry.provinceState ? `${selectedCountry.provinceState} - ` : null}{selectedCountry.countryRegion}
                            </h6>
                            <div>
                                confirmed : {selectedCountry.confirmed}
                            </div>
                            <div>
                                recovered : {selectedCountry.recovered}
                            </div>
                            <div>
                                deaths : {selectedCountry.deaths}
                            </div>
                        </Popup>
                    ) : null}

                </ReactMapGL>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        makerlists : state.countries
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getMakerLists : () => {
            return dispatch(actions.getMakerListRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewMap);