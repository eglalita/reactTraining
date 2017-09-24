import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ItemListPage from './ItemListPage'
import AddItemPage from './AddItemPage'
import EditItemPage from './EditItemPage'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: 1,
      item: [ { id: 1,
                text: 'item1'
              },
            ]
    } 
  }
  renderItemListPage(props){
    const {item} = this.state
    return <ItemListPage {...props} item={item} />
  }
  render() {
    return (
       <BrowserRouter>
          <div className="app">
              <Switch>
                <Route exact path="/" component={(props) => this.renderItemListPage(props)}/>
                <Route path="/add" component={AddItemPage}/>
                <Route path="/edit" component={EditItemPage}/>
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
