import React from 'react'



const EmbedYT = (props) => {
    
    return <div dangerouslySetInnerHTML ={{__html: props.youtubeVid.primary.embed_url.html}} />

}

export default EmbedYT;