import React from 'react'
import { RichText } from 'prismic-reactjs'
import {linkResolver } from '../../prismic-configuration'
import { Link } from 'react-router-dom'
import Card from "react-bootstrap/Card";


/**
 * TODO
 * add hover effect for titles
 */

const cardStyle={

    width: "300px", 
    height:"300px",
    borderRadius: "0px",
    margin:"5px"
}

const cardLinkStyle={
    textDecoration: "none",
    color:"black"
}



const AuthorCard = (props) =>{
   const author = props.author.data;
        return(
            
                <Card>
                    <Card.Body>
                            <img src={author.author_image.url}/>
                            <h3> {author.author_name[0].text}</h3>
                     <RichText render={author.author_bio} linkResolver={linkResolver} />            
                  </Card.Body>

              </Card>
          

        )
  
}


export default AuthorCard