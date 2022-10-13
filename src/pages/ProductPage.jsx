import React, {useState} from 'react'
import {useLocation } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { Container, Button, Dropdown } from 'react-bootstrap';
import {FiMinus, FiPlus} from 'react-icons/fi'

const ProductPage = () => {

  const product = useLocation().state

  //Create an object containing each option title as key and the first option value as its value
    const defaultOptions = {}
    product.options?.forEach(option =>{
      defaultOptions[option.optionTitle] = option.optionValues[0]
    })

    const {getItemQuantity, increaseCartQuantity} = useCart();
    const [qty, setQty] = useState(1)

    const [optionState, setOptionState] = useState(defaultOptions)

    const incQty = () =>setQty((prevQty) => prevQty + 1)
    const decQty = () =>setQty((prevQty) => (prevQty - 1 < 1 ? 1 : prevQty - 1 ))

    const onAddToCart = () => increaseCartQuantity(product, qty, optionState)

    const Dropdowns = product.options?.map(option =>{
        return (
          <>
            <div>{option.optionTitle}</div>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                {optionState[option.optionTitle]}
              </Dropdown.Toggle>
          
              <Dropdown.Menu>
                  {option.optionValues.map(optionValue => {
                    return(
                    <Dropdown.Item onClick={()=> setOptionState({...optionState, [option.optionTitle]: optionValue})}>
                      {optionValue}
                    </Dropdown.Item>
                    )
                  })}
              </Dropdown.Menu>
          </Dropdown>
        </>
        )
      })

  return (
    <Container className='mt-4'>
        <img
             src={product.img}
             alt={product.title}
             width= {200}
             height = {300}
             priority="true"
        />
        <p>{product.title}</p>
        <p>${product.price}</p>
        {Dropdowns}

        <div className="py-2">
          <Button variant="outline-secondary" onClick={() => decQty()}><FiMinus/></Button>
          <span className='btn-outline-secondary px-2 mx-auto' >{qty}</span>
          <Button variant="outline-secondary" onClick={() => incQty()}><FiPlus/></Button>
        </div>
        <div>
            <Button onClick={() => onAddToCart()}
            >Add to Cart</Button>
        </div>
    </Container>
  )
}

export default ProductPage