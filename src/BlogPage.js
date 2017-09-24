import React, {Component} from 'react'
import {Route, Switch, Link} from 'react-router-dom'
import BlogList from './BlogList'
import BlogDetail from './BlogDetail'


class Blog extends Component {
    
 render() {
   return (
       
       <div className="blog-page">
           <h2>BlogPage</h2>
           <Switch>
                <Route exact path="/blog" component={BlogList}/>
                <Route path="/blog/:id" component={BlogDetail}/>
           </Switch>
           <Link to="/">Back to Home</Link>
       </div>
   )
 }
}

export default Blog;