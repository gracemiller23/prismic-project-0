import React, { useEffect, useState } from 'react'
import { RichText } from 'prismic-reactjs'
import { client, linkResolver } from '../prismic-configuration'
import Prismic from 'prismic-javascript'
import { Link } from 'react-router-dom'
import { PostCard} from './subcomponents'
import { Container } from 'react-bootstrap'



const PostGrid = (props) => {
  const [posts, setPostData] = useState(null)
  const [notFound, toggleNotFound] = useState(false)

  // Get the page document from Prismic
  useEffect(() => {
      
    const fetchData = async () => {

        const postsData = await client.query(
            Prismic.Predicates.at('document.type', 'post')
        )
 
        if(postsData){
            return setPostData(postsData.results)
        }else{
            toggleNotFound(true)
        }
     
    }
    fetchData()
  }) 

  if (posts) {
    return (
    <Container className="container-sm d-flex flex-row"> 
        {posts.map((post, index)=>{
            if (props.numPosts){
                if(index < props.numPosts){
                    return (
                            <PostCard postData={post} key= {post.uid}/>
                    )
                }
            }
        })}
    </Container>    
    )
  } else if (notFound) {
    return <p>No posts available.</p>
  }
  return null
}

export default PostGrid