import React from 'react';
import logo from './../../images/logo.png';
import { Link, Route } from 'react-router-dom';

const menus = [
    {
        name : 'Trang chu',
        to : '/',
        exact : true,
        icon : 'fas fa-home'
    },
    {
        name : 'Charts',
        to : '/charts',
        exact : false,
        icon : 'fas fa-chart-area'
    },
    {
        name : 'Lien he',
        to : '/contact',
        exact : false,
        icon : 'fas fa-phone-volume'
    }
    
];

const MenuLink = ({label, to, activeOnlyWhenExact, icon}) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({match}) => {
                var active = match ? 'active' : '';
                return  <li className={'nav-item ml-3'}>
                            <Link to={to} className={`nav-link ${active}`}>
                                <i className={icon}></i> {label}
                            </Link>
                        </li>
            }}
        />
    )
};


class Menu extends React.Component {

    showMenus = (menus) => {
        var result = null;
        if(menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                        icon={menu.icon}
                    />
                )
            })
        }
        return result;
    }

    render() {
        return (
            <nav className="navbar bg-light navbar-expand-lg navbar-light px-lg-5">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo03"
                    aria-controls="navbarTogglerDemo03"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <Link to="/" className="navbar-brand">
                    <img
                        src={logo}
                        width={30}
                        height={30}
                        className="d-inline-block align-top mr-2"
                        alt=''
                        loading="lazy"
                    />
                    <b>Covid-19</b>
                </Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        {this.showMenus(menus)}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Menu;