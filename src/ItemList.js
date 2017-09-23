import React, {Component} from 'react'
import Item from './Item'


class ItemList extends Component {

 render() {
     const{item, handleRemove} =this.props
   return (
        <ul class = "item-list">
            {item.map((value, index)=> <Item key={index} itemRemove= {()=>handleRemove(index)}>{value}</Item>)}
        </ul>
   )
 }
}

export default ItemList;