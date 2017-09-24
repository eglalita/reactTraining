import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ItemListPage from './ItemListPage'
import AddItemPage from './AddItemPage'
import EditItemPage from './EditItemPage'
import { withLoading } from './HOC'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      item: []
    } 
  }


  componentDidMount(){
    const { loading, loaded } = this.props
    fetch('http://localhost:3030/item')
    .then((res) => res.json())
    .then((res) => {
      this.setState({
        item: res
      })
    })
  }

  addItem(text){
    const option = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        text
      })
    }

    return fetch('http://localhost:3030/item', option)
      .then((res) => res.json())
      .then((res) => this.setState({
        item: [...this.state.item , res ]
      }))
  }

  editItem(id, text){
    const option = {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        text
      })
    }

    return fetch(`http://localhost:3030/item/${id}`, option)
      .then((res) => res.json())
      .then((res) => this.setState({
        item: this.state.item.map((v) => {
                  if(v.id == id){
                    return {
                        ...v,
                        text
                    }
                  } else {
                    return v
                  }
              })
      }))
  }

  deleteItem(id){
    const option = {
      method: 'DELETE',
    }

    return fetch(`http://localhost:3030/item/${id}`, option)
      .then((res) => res.json())
      .then((res) => this.setState({
        item: this.state.item.filter((v) => {
          if (v.id == id) {
            return false
          } else {
            return true
          }
        })
      }))
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
                {this.props.isLoading ? <div>Loading...</div> : null}
                <Route exact path="/" component={(props) => this.renderItemListPage(props)}/>
                <Route path="/add" component={(props) => this.renderAddItemPage(props)}/>
                <Route path="/edit/:id" component={(pros) => this.renderEditItemPage(pros)}/>
              </Switch>
          </div>
       </BrowserRouter>
    )
  }
}

export default App;
