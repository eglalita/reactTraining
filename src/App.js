import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import HomePage from './HomePage'
import BlogPage from './BlogPage'

import PageNotFound from './PageNotFound'

class App extends Component {
  render() {
    return (
       <BrowserRouter>
          <div className="app">
              <Switch>
                <Route exact path="/" component={HomePage}/>
                {/* <Route exact path="/blog" component={BlogList}/>
                <Route exact path="/blog/:id" component={BlogDetail}/> */}
                <Route path="/blog" component={BlogPage}/>
                <Route path="/*" component={PageNotFound}/>
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
