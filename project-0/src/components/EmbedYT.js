import React from 'react'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../prismic-configuration'


const EmbedYT = (props) => {
    
    return <div dangerouslySetInnerHTML ={{__html: props.youtubeVid.primary.embed_url.html}} />

}

export default EmbedYT;