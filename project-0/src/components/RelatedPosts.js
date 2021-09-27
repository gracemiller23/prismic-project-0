import React, { useEffect, useState } from 'react'
import { client } from '../prismic-configuration'
import { PostCard} from './subcomponents'
import { Container } from 'react-bootstrap'



const RelatedPosts = (props) => {
  let postIds = props.posts.items.map(item => item.related_post.id );
  const [posts, setPostData] = useState(null)
  const [notFound, toggleNotFound] = useState(false)

  // Get the page document from Prismic
  useEffect(() => {
      
    const fetchData = async () => {

        const postsData = await client.getByIDs(postIds)
 
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
        {posts.map((post)=>{
                    return (
                            <PostCard postData={post} key= {post.uid}/>
                    )
                
            
        })}
    </Container>    
    )
  } else if (notFound) {
    return console.warn("You have enabled a related posts slice, but you no related posts available.")
  }
  return null
}

export default RelatedPosts