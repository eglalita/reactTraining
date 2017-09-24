import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import FormItem from './FormItem'

class EditItempage extends Component {
    
 render() {
     const { item , match: {params: { id } } } = this.props
     let text = ''
     item.forEach((v, i) => {
         if(v.id == id){
             text = v.text
         }
     })
   return (
        <div className="edit-item-page">
            <h2>Edit Item Page</h2>
                <div>
                    <FormItem onClick={(text) => {}} defaultValue={text}/>
                </div>
        </div>
   )
 }
}

export default EditItempage;