import React, {useState, useEffect} from 'react'
import ProductList from '../components/ProductList'
import api from '../api/services'
import {Container} from 'react-bootstrap';


const HomePage = () => {

const [products, setProducts] = useState([]);

    useEffect(() => {
      api.getProducts()
      .then(response =>{
        setProducts(response)
      })
    }, [])

  return (
      <Container fluid style={{'backgroundColor': '#e3f2fd'}}>
        <ProductList products = {products}/>
      </Container>
  )
}

export default HomePage