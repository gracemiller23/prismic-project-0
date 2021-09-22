import React from 'react'
import { linkResolver } from '../prismic-configuration'
import {Link} from 'react-router-dom'


const NavigationBar = (props)=>{
    console.log(props.links)
    return(
    <nav>
        <ol>
           {props.links.map((link)=>{
               return(
               
                   <li id={link.navigation_link.id} style={{display:"inline-block", margin:"5px"}}>
                       <Link to={`/${link.navigation_link.type}/${link.navigation_link.uid}`} style={{color:"white"}}> {link.navigation_link.slug} </Link>
                       {/* <a className="nav-link" href={Link.url(link.navigation_link, linkResolver)} >{link.navigation_link.slug} </a> */}
                    </li>
    
               )
           })}


            
        </ol>
    </nav>
    )
}

export default NavigationBar