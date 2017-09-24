import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import FormItem from './FormItem'
import { withLoading } from './HOC'

class EditItempage extends Component {
    
    handleEdit(text){
        const { onEditItem, loading, history, match: { params: { id } } } = this.props
        loading()
        
        onEditItem(id, text).then(() => history.push('/'))
    } 

    handleDelete(id){

        const {onDeleteItem,  history, loading } = this.props 
        loading()
        onDeleteItem(id).then(() => history.push('/'))
    }

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
                        <FormItem onClick={(text) => this.handleEdit(text)} defaultValue={text}/>
                            <button onClick={() => this.handleDelete(id)}>Delete</button>
                    </div>
            </div>
    )
    }
}

export default withLoading(EditItempage)