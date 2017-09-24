import React, {Component} from 'react'
import Item from './Item'


class ItemList extends Component {

 render() {
     const {item, onItemClick} = this.props
   return (
        <ul className = "item-list">
            {
                item.map((value)=> <Item key={value.id} handleClick={() => onItemClick(value.id)} >{value.text} </Item>)
            }
        </ul>
   )
 }
}

export default ItemList;