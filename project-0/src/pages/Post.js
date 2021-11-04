import React, { useEffect, useState } from 'react'
import { RichText } from 'prismic-reactjs'
import { client, linkResolver } from '../prismic-configuration'
import NotFound from './NotFound'
import {NavigationBar, SliceHelper} from '../components'
import { AuthorCard } from '../components/subcomponents'
import { Container } from 'react-bootstrap'

const Post = ({ match }) => {
  const [doc, setDocData] = useState(null)
  const [notFound, toggleNotFound] = useState(false)

  const uid = match.params.uid

  // Get the page document from Prismic
  useEffect(() => {
    const fetchData = async () => {
      // We are using the function to get a document by its UID
      const result = await client.getByUID('post', uid, {'fetchLinks': ['author.author_image', 'author.author_name', 'author.author_bio' ]})

      if (result) {
        // We use the State hook to save the document
        return setDocData(result)
      } else {
        // Otherwise show an error message
        console.warn('Page document not found. Make sure it exists in your Prismic repository')
        toggleNotFound(true)
      }
    }
    fetchData()
  }, [uid]) // Skip the Effect hook if the UID hasn't changed

  if (doc) {

    return (
      <div className="post container">
     
        <RichText render={(doc.data.blog_title)} />

        <img src={doc.data.featured_image.url} alt={doc.data.featured_image.alt} /> 
       
        <RichText render={doc.data.blog_content} linkResolver={linkResolver} />
      
        {doc.data.body.map((slice)=>{
            return <SliceHelper slice={slice} />
        })}

        <AuthorCard author={doc.data.author}/>
      </div>
    )
  } else if (notFound) {
    return <NotFound />
  }
  return null
}

export default Post