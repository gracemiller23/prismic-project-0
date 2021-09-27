import React from 'react'
import { PostGrid, RelatedPosts, TextSlice, EmbedYT} from '../components'


const SliceHelper = (props) => {
    let type= props.slice.slice_type;
   
    //use the slices object to return the proper component for each slice
    let slices = {
        //name each method according to the slice_type value
        post_grid: () => {
          return <PostGrid numPosts={props.slice.primary.number_of_posts_to_display}/>
        },
        related_posts: () => {
          return <RelatedPosts posts={props.slice}/>
        },
        text_slice: () => {
          return <TextSlice text={props.slice}/>
        },
        embed_youtube: () => {
          return <EmbedYT youtubeVid = {props.slice}/>
        }
    }
   
  if(!slices[type]){
    return "The components for your slices have not been built yet.";
  }

   //return the proper component based on the type 
   return slices[type]();
}

export default SliceHelper
