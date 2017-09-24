import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import FormItem from './Additem'
import { withLoading } from './HOC'



class AddItempage extends Component {
    

 handleAddItem(text){
     const { onAddItem, history, loading} = this.props
     loading()
     onAddItem(text).then(() => history.push('/'))


 }

 render() {
     const { onAddItem } = this.props
   return (
        <div>
            <h2>Add Item Page</h2>
            <div>
                <FormItem  onClick={(text) => this.handleAddItem(text)}/>
                    {this.props.isLoading ? <div>Loading...</div> : null}
            </div>
        </div>
   )
 }
}

export default withLoading(AddItempage)