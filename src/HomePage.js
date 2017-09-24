import React, {Component} from 'react'
import {Link} from 'react-router-dom'



class HomePage extends Component {
    
 render() {
   return (
       <div className="homepage">
           <h1>Homepage</h1>
           <Link to="/blog">go to Blog</Link>
           <br/>
           <a href="/blog">go to Blog with tag a</a>
       </div>
   )
 }
}

export default HomePage;