import React, {Component} from 'react'
import {Link} from 'react-router-dom'



class BlogDetail extends Component {
    
 render() {
    //console.log(this.props)
    //const {match} = this.props
    // setTimeout(()=>{
    //     this.props.history.push('/')
    // }, 3000)
    // const {match} =  this.props
    // const {params} = match
    // const {id} = params

    // const {match: {params: {id}}} = this.props //similar with previous 3 lines

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