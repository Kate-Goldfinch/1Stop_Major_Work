import React,{useState} from 'react'
import { Container, Modal, Button, Form, InputGroup } from 'react-bootstrap';
import services from '../api/services';

const NewItemForm = ({setShowModal}) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [stock, setStock] = useState(0)

    const onFormSubmit = ((e) =>{
      e.preventDefault()
      setShowModal(false)
      console.log(e)
      const newProduct = { 
        title,
        description,
        price,
        category,
        stock,
        img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'

      }
      services.createProduct(newProduct)
        .then(response =>{
          console.log(response)
  })
})

  return (
    <>
    <Modal.Header closeButton>
    <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control 
          type="file"
          accept="image/png, image/gif, image/jpeg" />
      </Form.Group>

        <Form.Group controlId="formGridTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control value={title} onChange ={e => setTitle(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" value={description} onChange ={e => setDescription(e.target.value)}/>
      </Form.Group>

      <Form.Label>Price</Form.Label>
      <InputGroup className="mb-3" controlId="formGridPrice">
        <InputGroup.Text>$</InputGroup.Text>
          <Form.Control 
              value={price}
              aria-label="Amount (to the nearest dollar)"
              onChange ={e => setPrice(e.target.value)}
          />
        </InputGroup>

        <Form.Group className="mb-3" controlId="formGridCategory">
        <Form.Label>Category</Form.Label>
        <Form.Control value={category} onChange ={e => setCategory(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridStock">
        <Form.Label>Stock</Form.Label>
        <Form.Control value={stock} onChange ={e => setStock(e.target.value)}/>
      </Form.Group>

        </Form>
      </Modal.Body>
      <Modal.Footer>
          <Button 
              variant="secondary" 
              onClick={()=> setShowModal(false)}>Close
          </Button>
          <Button 
              variant="primary" 
              onClick ={(e)=>onFormSubmit(e)}>Add Product 
          </Button>
      </Modal.Footer>
  </>
  )
}

export default NewItemForm