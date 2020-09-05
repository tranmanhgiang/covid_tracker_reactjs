import React from 'react';

class LastUpdate extends React.Component {

    render() {
        var date = new Date(this.props.lastupdate);
        return (
            <div>
                <div className="px-lg-5 px-3 px-md-3 p-3">Cap nhat lan cuoi : <span className="text-primary">{date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()} {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</span></div>
                <h2 className=" px-lg-5 px-3 mb-3">The Gioi</h2>
                <hr className="ml-lg-5 ml-3 ml-md-3 ml-xl-5" />
            </div>
        );
    }
}

export default LastUpdate;