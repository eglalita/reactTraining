import React, {Component} from 'react'



class AddItem extends Component {
    handleClick(){
        const {textField} = this.refs
        const {onClick} = this.props
        if(textField.value.trim()){
            onClick(textField.value.trim())
            textField.value = ''
        }
    }
 render() {
   return (
       <div className="add-item">
           <input type="text" ref="textField"/>
           <button onClick={()=>this.handleClick()}>Add</button>
       </div>
   )
 }
}

export default AddItem;