import React,{useState, useEffect} from 'react'
import {Form, Table} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
import services from '../api/services'

const ProductTable = () => {

  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log('test')
    services.getProducts()
      .then(response =>{
        setProducts(response)
      return () => {
        console.log('test2')
        setProducts([])
  }
  })
}, [])

  const onItemClick = ((product)=>{
    navigate(`/admin/${product._id}`, {state: product});
})

    const tableItem = products.map((product)=>{
        return(
              <tr onClick ={() => onItemClick(product)}>
                 {/* <Form.Check aria-label={`Select ${product.title}`} /> */}
                  <th>{product._id}</th>
                  <th>{product.title}</th>
                  <th>{product.description}</th>
                  <th>{product.price}</th>
                  <th>{product.categories?.toString()}</th>
              </tr>
        )
    })

    return (

        <Table striped>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {tableItem}
          </tbody>
        </Table>
    )
}

export default ProductTable