import React from 'react'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../prismic-configuration'
import { Row, Col} from 'react-bootstrap'

const ImgTxtColumns = (props) => {
    let imgOnRight = props.columns.primary.image_location;
    return  (
        <Row>
            {/* TODO insert rich text and image */}
            <Col className={`col-md ${imgOnRight ? `order-md-1`: `order-md-2`}`}>
                <RichText render={props.columns.primary.row_text} linkResolver={linkResolver} />            
            </Col>
            <Col className={`col-md ${imgOnRight ? `order-md-2`: `order-md-1`}`}>       
                 <img src={props.columns.primary.row_image.url} alt={props.columns.primary.row_image.alt} /> 
            </Col>
        </Row>

    
    
    )


}

export default ImgTxtColumns;