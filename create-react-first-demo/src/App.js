import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './home'
import Welcome from './helloDemo/helloName'

// function App() {
class App extends React.Component {
  render() {
    return (
        <div className="App">
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/welcome/:name" component={Welcome} />
                </Switch>
            </HashRouter>
        </div>
    );
  }
}

export default App;
