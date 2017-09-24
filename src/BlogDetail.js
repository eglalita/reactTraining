import React, {Component} from 'react'
import {Link} from 'react-router-dom'



class BlogDetail extends Component {
    
 render() {
     console.log(this.props)
    //const {match} = this.props
   return (
       <div className="blog-detail">
           <div>
               Detail Blog {this.props.match.params.id}
           </div>
           <Link to="/blog">Back</Link>
           
       </div>
   )
 }
}

export default BlogDetail;