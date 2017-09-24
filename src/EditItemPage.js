import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import FormItem from './FormItem'

class EditItempage extends Component {
    
    handleEdit(text){
        const { onEditItem, history, match: { params: { id } } } = this.props
        onEditItem(id, text)
        history.push('/')
    } 

    handleDelete(id){
        const {onDeleteItem , history } = this.props 
        onDeleteItem(id)
        history.push('/')
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

export default EditItempage;