import React from 'react';
import CountUp from 'react-countup';
import { Doughnut } from 'react-chartjs-2';
import LastUpdate from '../LastUpdate/LastUpdate';
import ViewMap from './../ViewMap/ViewMap';
import './OverView.css';
import { connect } from 'react-redux';
import * as actions from './../../actions/index';

class OverView extends React.Component {

    componentDidMount() {
        this.props.getLastUpdate();
        this.props.getConfirmed();
        this.props.getRecovered();
        this.props.getDeaths();
    }

    render() {
        var { confirmed, recovered, deaths } = this.props;

        const data = {
            labels : ['so ca nhiem','da khoi','tu vong'],
            datasets : [{
              data : [confirmed, recovered, deaths],
              backgroundColor: [
                'gray',
                'green',
                'red'
                ],
              hoverBackgroundColor: [
                'gray',
                'green',
                'red'
              ]
            }]
        };

        return (
            <div>
                <LastUpdate lastupdate={this.props.lastupdate} />
                <div className="row overview">
                    <div className="px-lg-5 px-xl-5 col-md-12 col-lg-12 col-xl-5">
                        <div className="row p-0 m-3">
                            <div className="card border-secondary mb-3 col-sm-6 col-lg-4 col-md-4 col-xl-4 col-12">
                                <h3 className="card-header">Ca nhiễm</h3>
                                <div className="card-body text-secondary">
                                <h3 className="card-title">
                                    <CountUp
                                    start={0}
                                    end={confirmed ? confirmed : 0}
                                    duration={2.75}
                                    />
                                </h3>
                                
                                </div>
                            </div>
                            <div className="card border-success mb-3 col-sm-6 col-lg-4 col-md-4 col-xl-4">
                                <h3 className="card-header">Đã khỏi</h3>
                                <div className="card-body text-success">
                                <h3 className="card-title">
                                <CountUp
                                    start={0}
                                    end={recovered ? recovered : 0}
                                    duration={2}
                                    />
                                </h3>
                                
                                </div>
                            </div>
                            <div className="card border-danger mb-3 col-sm-6 col-lg-4 col-md-4 col-xl-4">
                                <h3 className="card-header">Tử vong</h3>
                                <div className="card-body text-danger">
                                <h3 className="card-title">
                                    <CountUp
                                    start={0}
                                    end={deaths ? deaths : 0}
                                    duration={1.5}
                                    />
                                </h3>
                                </div>
                            </div>
                        </div>
                        <div>
                        <Doughnut height={150} data={data} />
                        </div>
                    </div>
                    <ViewMap />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        confirmed : state.confirmed,
        recovered : state.recovered,
        deaths : state.deaths,
        lastupdate : state.lastupdate
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getConfirmed : () => {
            dispatch(actions.getConfirmedRequest());
        },
        getRecovered : () => {
            dispatch(actions.getRecoveredRequest());
        },
        getDeaths : () => {
            dispatch(actions.getDeathsRequest());
        },
        getLastUpdate : () => {
            dispatch(actions.getLastUpdateRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OverView);