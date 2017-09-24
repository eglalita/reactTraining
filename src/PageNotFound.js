import React, {Component} from 'react'
import {Link} from 'react-router-dom'



class PageNotFound extends Component {
    
 render() {
   return (
       <div className="page-not-found">
           <h2>Page Not Found</h2>
           <Link to="/">Back</Link>
       </div>
   )
 }
}

export default PageNotFound;