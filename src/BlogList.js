import React, {Component} from 'react'
import {Link} from 'react-router-dom'



class BlogList extends Component {
    
 render() {
   return (
       <div className="blog-list">
           {/* <li><Link to="/homepage">go to HomePage</Link></li> */}
           <li><Link to="/blog/1">go to Blog 1</Link></li>
           <li><Link to="/blog/2">go to Blog 2</Link></li>
           <li><Link to="/blog/3">go to Blog 3</Link></li>
       </div>
   )
 }
}

export default BlogList;