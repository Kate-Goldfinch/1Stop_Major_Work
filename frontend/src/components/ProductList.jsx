import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import api from "../api/services";

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function ProductList() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      api.getProducts()
      .then(response =>{
        setProducts(response)
      })
    }, [])

    return (
      <Container>
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
