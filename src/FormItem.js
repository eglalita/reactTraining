import React, {Component} from 'react'



class FormItem extends Component {
    handleClick(){
        const {textField} = this.refs
        const {onClick} = this.props
        if(textField.value.trim()){
            onClick(textField.value.trim())
            textField.value = ''
        }
    }
 render() {
     const { defaultValue } = this.props
   return (
       <div className="form-item">
           <input type="text" ref="textField" defaultValue={defaultValue}/>
           <button onClick={()=>this.handleClick()}>Submit</button>
       </div>
   )
 }
}

export default FormItem;