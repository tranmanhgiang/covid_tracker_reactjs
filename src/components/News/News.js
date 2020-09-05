import React from 'react';
import './News.css';
import { connect } from 'react-redux';
import * as actions from './../../actions/index';
import Pagination from "react-js-pagination";


class News extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          activePage: 1,
          ofset: 0,
          total : 0
        };
    }

    componentDidMount() {
        this.props.getNews();
    }

    showNews = (news) => {
        var result = [];
        var temp = [];
        for(var item in news) {
            temp.push(news[item]);
        }

        if(temp.length > 0) {
            const slice = temp.slice(this.state.ofset, this.state.ofset + 3);
            // console.log(slice);
            result = slice.map((item, index) => {
                var date = new Date(item.publishedAt);
                return <div className="mb-5" key={index}>
                        <a href={item.url}><h4 className="title">{item.title}</h4></a>
                        <div className="row my-3">
                            <div className="col-lg-9 col-xl-9 col-8 description"> {item.description} </div>
                            <div className="col-lg-2 col-xl-2 col-1">
                                <img src={item.urlToImage} alt="" width="100px" />
                            </div>
                        </div>
                        <div>Nguon : {item.author}</div>
                        <small>Dang luc : <span className="text-primary">{date.getHours()}:{date.getMinutes()} {date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}</span></small>
                    </div>
            });
        }
        return result;
      }

      handlePageChange = (pageNumber) => {
        const selectedPage = (pageNumber-1)*3;
        this.setState({
            activePage: pageNumber,
            ofset : selectedPage
        });
      }

    render() {
        var { news } = this.props;
        
        return (
            <div className="px-lg-0 mx-3 mx-lg-5 mx-xl-5 px-xl-5">
                <h4 className="news">Tin tuc</h4>
                {this.showNews(news)}

                <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={3}
                    totalItemsCount={20}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange.bind(this)}
                    itemClass="page-item"
                    linkClass="page-link"
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        news : state.news   
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getNews : () => {
            dispatch(actions.getNewsRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);