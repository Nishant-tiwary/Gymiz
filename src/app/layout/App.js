import React from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/home/HomePage';
import TestComponent from '../../components/testarea/TestComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
//import logo from './logo.svg';
//import './style.css';


class App extends React.Component {
  render() {
    return (
      <div>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
      <Route
        path="/(.+)"
        render={() => (
          <div>
            <Container className="main">
              <Switch>
                <Route path="/test" component={TestComponent} />
              </Switch>
            </Container>
          </div>
        )}
      />
    </div>
    );
  }
}

export default App;