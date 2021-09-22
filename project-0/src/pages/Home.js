import React, { useEffect, useState } from 'react'
import { RichText } from 'prismic-reactjs'
import { client, linkResolver } from '../prismic-configuration'
import NotFound from './NotFound'
import {NavigationBar, SliceHelper }from '../components'
import Prismic from 'prismic-javascript'
import {Container, Row, Col} from 'react-bootstrap'

const Home = (props) => {
  const [doc, setDocData] = useState(null)
  const [notFound, toggleNotFound] = useState(false)

  // Get the home document from Prismic
  useEffect(() => {
      
    const fetchData = async () => {
     
        const home = await client.query(
            Prismic.Predicates.at('document.type', 'home')
        )

      if (home ) {
        
            return setDocData({home:home.results[0]})
      
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
            <h3>{doc.home.data.title[0].text}</h3>
            <p>{doc.home.data.description[0].text}</p>
          </Col>
        </Row>
        {/** Handle slice portions of the custom type with the Slice Helper Component to centralize slice/component logic.  
         * TODO: Decide where/if need to handle rows/cols for slices
        */}
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