import React from 'react'
import {Button, Card} from 'react-bootstrap'

function Product(props) {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71KCwNV6MuL._SL1500_.jpg" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content. {props.description}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Button style={{margin: "8px"}} variant="warning" >See all details</Button>
        <Button color="btn-success" variant='success'  >Add to Cart</Button>
        </Card.Body>
    </Card>
    </div>
  )
}

export default Product