import React, {Component} from 'react'


class Item extends Component {



 render() {
     const {children, itemRemove} = this.props
   return (
       <li className="item" onClick={()=>itemRemove()}>{children}</li>
   )
 }
}

export default Item;