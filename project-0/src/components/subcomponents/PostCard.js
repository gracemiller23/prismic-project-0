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



const PostCard = (props) =>{
        return(
            <Link to={`/${props.postData.type}/${props.postData.uid}`} style={cardLinkStyle}> 
                <Card className='image_fill' style={{ backgroundImage: "url("+props.postData.data.featured_image.url+")", ...cardStyle }}>
                    <Card.Body>
                        <RichText render={props.postData.data.blog_title} linkResolver={linkResolver} />            
                    </Card.Body>

                </Card>
            </Link> 
        )
  
}


export default PostCard