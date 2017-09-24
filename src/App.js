import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
       <BrowserRouter>
          <div className="app">
              <Switch>
                <Route exact path="/" component={Temp}/>
                <Route exact path="/a" component={Temp2}/>
                <Route exact path="/a/b" component={Temp3}/>
              </Switch>
          </div>
       </BrowserRouter>
    )
  }
}

const Temp = () => {
    return <div>TEMP COMPONENT</div>
 }
 const Temp2 = () => {
  return <div>TEMP COMPONENT2</div>
}
const Temp3 = () => {
  return <div>TEMP COMPONENT3</div>
}

export default App;
