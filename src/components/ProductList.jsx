import React from "react";
import ProductItem from "./ProductItem";
import {Container, Row, Col} from 'react-bootstrap';

export default function ProductList({products}) {

    return (
      <Container style={{'backgroundColor': 'white'}}>
        <Row xs={1} md={2} lg={4} className="g-4">
            {products.map((product) =>(
              <Col key={product._id}>
                <ProductItem product={product}/>
              </Col>
            ))}
        </Row>
      </Container>
    )
}
