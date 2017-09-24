import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import AddItem from './Additem'
import ItemList from './ItemList'



class ItemListPage extends Component {
    
 render() {
     const {item} = this.props
   return (
    <div className="item-list-page">
            <h2>Item List Page</h2>
            <div>
             <ItemList item={item}/>
             <Link to="/add">Add</Link>
             </div>
        </div>
   )
 }
}

export default ItemListPage;