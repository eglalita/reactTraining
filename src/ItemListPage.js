import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import FormItem from './FormItem'
import ItemList from './ItemList'



class ItemListPage extends Component {
  
 gotoEdit(id){
    const { history } = this.props
    history.push('/edit/' + id)
 }   

 render() {
     const {item} = this.props
   return (
    <div className="item-list-page">
            <h2>Item List Page</h2>
            <div>
             <ItemList item={item} onItemClick={(id) => this.gotoEdit(id)}/>
             <Link to="/add">Add</Link>
             </div>
        </div>
   )
 }
}

export default ItemListPage;