import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ItemList from './ItemList'
import AddItem from './AddItem'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      item: [],
    }
  }
  addItem(text){
    this.setState({
      item: [...this.state.item, text]
    })
  }

removeItem(itemindex){
  this.setState({
  item: this.state.item.filter((value,index)=>{
    if(index===itemindex){
      return false
    }
    else{
      return true
    }
  })
})
}

  // filterItem(text){
  //   this.setState({

  //   })
  // }

  render() {
    const {item} = this.state
    return (
       <div className = "app">
          <ItemList item= {item} handleRemove={(itemIndex)=>this.removeItem(itemIndex)} />
          <AddItem onClick={(text)=>this.addItem(text)}/>
       </div>
    )
  }
}

export default App;
