import React from 'react';
import OverView from './../../components/OverView/OverView';
import CountryLists from '../../components/CountryLists/CountryLists';
import News from '../../components/News/News';

class Home extends React.Component {
    render() {
        return (
            <div>
                <OverView />
                <h2 className="px-lg-5 px-3 px-md-3 p-3">Theo doi nhanh</h2>
                <hr className="ml-lg-5 ml-3 ml-md-3 ml-xl-5" />
                <div className="row" style={{width: '100%'}}>
                    <div className="col-lg-8 px-lg-5">
                    <CountryLists/>
                    </div>
                    <div className="col-lg-4">
                    <News/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;