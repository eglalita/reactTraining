import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import FormItem from './Additem'



class AddItempage extends Component {
    
 constructor(props){
     super(props)
     this.state = {
         isLoading: false
     }
 }

 handleAddItem(text){
     const { onAddItem, history} = this.props
     this.setState({
         isLoading: true
     })
     onAddItem(text).then(() => history.push('/'))


 }

 render() {
     const { onAddItem } = this.props
   return (
        <div>
            <h2>Add Item Page</h2>
            <div>
                <FormItem  onClick={(text) => this.handleAddItem(text)}/>
                    {this.state.isLoading ? <div>Loading...</div> : null}
            </div>
        </div>
   )
 }
}

export default AddItempage;