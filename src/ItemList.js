import React, {Component} from 'react'
import Item from './Item'


class ItemList extends Component {

 render() {
     const {item} = this.props
   return (
        <ul className = "item-list">
            {
                item.map((value)=> <Item key={value.id}>{value.text} </Item>)
            }
        </ul>
   )
 }
}

export default ItemList;