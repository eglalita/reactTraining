import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import FormItem from './Additem'



class AddItempage extends Component {
    
 handleAddItem(text){
     const { onAddItem, history} = this.props
     onAddItem(text)
     history.push('/')
 }

 render() {
     const { onAddItem } = this.props
   return (
        <div>
            <h2>Add Item Page</h2>
            <div>
                <FormItem  onClick={(text) => this.handleAddItem(text)}/>
            </div>
        </div>
   )
 }
}

export default AddItempage;