import React, { useEffect, useState } from 'react'
import { RichText } from 'prismic-reactjs'
import { client, linkResolver } from '../prismic-configuration'
import NotFound from './NotFound'
import {NavigationBar, SliceHelper} from '../components'

const Page = ({ match }) => {
  const [doc, setDocData] = useState(null)
  const [notFound, toggleNotFound] = useState(false)

  const uid = match.params.uid

  // Get the page document from Prismic
  useEffect(() => {
    const fetchData = async () => {
      // We are using the function to get a document by its UID
      const result = await client.getByUID('page', uid, {'fetchLinks':['page.title']})

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
      <div className="page">
        
          <NavigationBar links={doc.data.navigation_links}/>
        {/* This is how to get an image into your template */}
        <img src={doc.data.image.url} alt={doc.data.image.alt} style={{height:"auto", width:"100vw"}} />
        {/* This is how to render a Rich Text field as plain text */}
        <h1>{RichText.asText(doc.data.title)}</h1>
        {/* This is how to render a Rich Text field into your template as HTML */}
        <RichText render={doc.data.description} linkResolver={linkResolver} />
        {doc.data.body.map((slice)=>{
            return <SliceHelper slice={slice} />
        })}

      </div>
    )
  } else if (notFound) {
    return <NotFound />
  }
  return null
}

export default Page