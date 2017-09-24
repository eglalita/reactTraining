import React, {Component} from 'react'


class Item extends Component {



 render() {
     const {children, handleClick} = this.props
   return (
       <li className="item" onClick={()=>handleClick()}>{children}</li>
   )
 }
}

export default Item;