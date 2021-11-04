import React from 'react'
import { linkResolver } from '../prismic-configuration'
import { Link } from 'prismic-reactjs'


const NavigationBar = (props)=>{
   
    return(
    <nav>
        <ol>
           {props.links.map((link)=>{
               return(
               
                   <li id={link.navigation_link.id} style={{display:"inline-block", margin:"5px", backgroundColor:"black"}}>
                       <a className="nav-link" href={Link.url(link.navigation_link, linkResolver)} >{link.navigation_link.data.title[0].text} </a>
                    </li>
    
               )
           })}


            
        </ol>
    </nav>
    )
}

export default NavigationBar