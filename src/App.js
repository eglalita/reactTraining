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

  addItem(text){
    this.setState({
      id: this.state.id + 1,
      item: [...this.state.item , { id: this.state.id + 1, text }]
    })
  }

  editItem(id, text){
    this.setState({
      item: this.state.item.map((v) => {
          if(v.id ==id){
            return {
                ...v,
                text
            }
          } else {
            return v
          }
      })
    })
  }

  deleteItem(id){
    this.setState ({
      item: this.state.item.filter((v) => {
        if (v.id == id) {
          return false
        } else {
          return true
        }
      })
    })
  }

  renderAddItemPage(props){
      return <AddItemPage {...props} onAddItem={this.addItem.bind(this)} />
  }

  renderEditItemPage(props){
    const { item } = this.state
    return <EditItemPage {...props} 
      onEditItem={this.editItem.bind(this)}
      item={item} 
      onDeleteItem={this.deleteItem.bind(this)}
    
    />
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
                <Route path="/add" component={(props) => this.renderAddItemPage(props)}/>
                <Route path="/edit/:id" component={(pros) => this.renderEditItemPage(pros)}/>
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
