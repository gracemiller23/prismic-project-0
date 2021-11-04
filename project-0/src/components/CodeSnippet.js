import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Row, Col} from 'react-bootstrap'
import Markdown from "react-markdown"

/* 
TODO add backtick escaping?
*/
const CodeSnippet = (props) => {
    return  (
        <Row>
            
            <Col className={`col-md`}>
                <div className='d-flex flex-column justify-content-center' style={{backgroundColor:'black', color:'white', width:'80%', margin:'10px auto', padding:'20px'}}>
                    <Markdown>{'```' + props.code.items[0].code_snippet[0].text + '```'}</Markdown>
                </div>
            </Col>
            
        </Row>

    
    
    )
    // return  props.text.items.map((item) =>{
    //     return <RichText render={item.content} linkResolver={linkResolver} />
    // })

}

export default CodeSnippet;