import React, { useEffect, useState } from 'react'
import { RichText } from 'prismic-reactjs'
import { client, linkResolver } from '../prismic-configuration'
import NotFound from './NotFound'
import {NavigationBar, SliceHelper }from '../components'
import Prismic from '@prismicio/client'
import {Container, Row, Col} from 'react-bootstrap'

const Home = (props) => {
  const [doc, setDocData] = useState(null)
  const [notFound, toggleNotFound] = useState(false)

  // Get the home document from Prismic
  useEffect(() => {
      
    const fetchData = async () => {
     
      const home = await client.getSingle('home', {'fetchLinks':['page.title']})

      if (home ) {
        
            return setDocData({home:home})
      
      } else {
        // Otherwise show an error message
        console.warn('Home document not found. Make sure it exists in your Prismic repository')
        toggleNotFound(true)
      }
    }
    fetchData()
  }) // Skip the Effect hook if the UID hasn't changed

  if (doc) {
    return (
      <Container fluid >
        {/**Handle static portions of the custom type */}

        <Row className='image_fill' style={{backgroundImage: 'url('+doc.home.data.hero_image.url+')', color: 'white', minHeight:'75vh'}}>
          <Col>
            <NavigationBar links={doc.home.data.navigation_links} linkColor='white'/>
            <RichText render={(doc.home.data.title)} />
            <RichText render={(doc.home.data.description)}/>
          </Col>
        </Row>
        {/** Handle slice portions of the custom type with the Slice Helper Component to centralize slice/component logic.  */}
        {doc.home.data.body.map((slice)=>{
            return <SliceHelper slice={slice} />
        })}

      </Container>
    )
  } else if (notFound) {
    return <NotFound />
  }
  return null
}

export default Home