import React, {useState} from 'react'
import {useLocation, useNavigate } from 'react-router-dom';
import { Container, Button, Form, InputGroup, Dropdown } from 'react-bootstrap';
import services from '../api/services';

const AdminItemPage = () => {

    const product = useLocation().state
    const navigate = useNavigate();

    
    const [title, setTitle] = useState(product.title)
    const [description, setDescription] = useState(product.description)
    const [price, setPrice] = useState(product.price)
    const [options, setOptions] = useState(product.options)

    const onFormSubmit = ((e) =>{
        e.preventDefault()
        const newValue = {
            title,
            description,
            price,
            options,
        }
        services.updateProduct(product._id, newValue)
            .then(navigate(-1))
    })

    const handleOptionTitleChange =(option, newTerm)=>{
      const newArray = [...options]
      let index = options.findIndex(opt => opt.optionTitle === option.optionTitle)
      newArray[index]={...option, optionTitle : newTerm}
      setOptions(newArray)
    }

    const handleOptionValuesChange =(option, optionValue, newTerm)=>{
      const newArray = [...options]
      let newOptions = [...option.optionValues]
      newOptions.splice(option.optionValues.indexOf(optionValue), 1, newTerm);
      let index = options.findIndex(opt => opt.optionTitle === option.optionTitle)
      newArray[index]={...option, optionValues : newOptions}
      setOptions(newArray)
    }

    const Dropdowns = options?.map((option, index) =>{
      console.log(options)
      return (
        <div key = {index}>
          <Form.Control 
                    value={option.optionTitle}
                    onChange={e=> handleOptionTitleChange(option, e.target.value)}
                    />
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              {option.optionValues[0]}
            </Dropdown.Toggle>
        
            <Dropdown.Menu>
                {option.optionValues.map((optionValue, index) => {
                  return(
                    <Form.Control 
                    key = {index}
                    value={optionValue}
                    onChange={e=> handleOptionValuesChange(option, optionValue, e.target.value)}
                    />
                  )
                })}
            </Dropdown.Menu>
        </Dropdown>
      </div>
      )
    })

  return (
    <Form>
        <img
             src={product.img}
             alt={product.title}
             width= {200}
             height = {300}
             priority="true"
        />

        <Form.Group controlId="formGridTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control value={title} onChange ={e => setTitle(e.target.value)}/>
        </Form.Group>

      <Form.Group className="mb-3" controlId="formGridDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control 
          as="textarea" 
          value={description} 
          onChange ={e => setDescription(e.target.value)}/>
      </Form.Group>

      <InputGroup className="mb-3" >
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control 
            value={price}
            aria-label="Amount (to the nearest dollar)"
            onChange ={e => setPrice(e.target.value)}
         />
      </InputGroup>
        
        {Dropdowns}

        
        <Button onClick ={e=>onFormSubmit(e)}>Update Product </Button>
      </Form>
  )
}

export default AdminItemPage