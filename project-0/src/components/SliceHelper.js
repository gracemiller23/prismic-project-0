import React from 'react'
import { PostGrid} from '../components'


const SliceHelper = (props) => {
    let type= props.slice.slice_type;
   
    //use the slices object to return the proper component for each slice
    let slices = {
        //name each method according to the slice_type value
        post_grid: () =>{
          return <PostGrid numPosts={props.slice.primary.number_of_posts_to_display}/>
        }
    }

   //return the proper component based on the type 
   return slices[type]();
}

export default SliceHelper
