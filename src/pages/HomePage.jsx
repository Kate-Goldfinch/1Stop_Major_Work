import React, {useState, useEffect} from 'react'
import ProductList from '../components/ProductList'
import api from '../api/services'

const HomePage = () => {

const [products, setProducts] = useState([]);

    useEffect(() => {
      api.getProducts()
      .then(response =>{
        setProducts(response)
      })
    }, [])

  return (
    <div>    
        <ProductList products = {products}/>
    </div>
  )
}

export default HomePage