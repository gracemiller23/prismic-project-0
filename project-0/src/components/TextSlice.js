import React from 'react'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../prismic-configuration'


const TextSlice = (props) => {

    return  props.text.items.map((item) =>{
        return <RichText render={item.content} linkResolver={linkResolver} />
    })

}

export default TextSlice;