import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';
import Footer from './components/Footer/Footer';

class App extends React.Component {

  showContentMenus = (routes) => {
    var result = null;
    if(routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
      });
    }
    return <Switch>{result}</Switch>
  }

  render() {
    return (
      <Router>
        <div>
          <Menu/>
          {this.showContentMenus(routes)}
          <br/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
