import React, {useState} from 'react'
import {useLocation } from 'react-router-dom';
import { useCart } from "../CartContext";
import { Container, Button } from 'react-bootstrap';
import {FiMinus, FiPlus} from 'react-icons/fi'
const ProductPage = () => {

    const product = useLocation().state

    const {getItemQuantity, increaseCartQuantity} = useCart();
    const [qty, setQty] = useState(1)

    const incQty = () =>setQty((prevQty) => prevQty + 1)
    const decQty = () =>setQty((prevQty) => (prevQty - 1 < 1 ? 1 : prevQty - 1 ))

    const onAddToCart = () => increaseCartQuantity(product, qty)
  return (
    <Container className='mt-4'>
        <img
             src={product.image}
             alt={product.title}
             width= {200}
             height = {300}
             priority
        />
        <p>{product.title}</p>
        <p>${product.price}</p>

        <div>
        <Button variant="outline-secondary" onClick={() => decQty()}><FiMinus/></Button>
        <span className='btn-outline-secondary' style={{display:'inline-block', width: '20px'}}>{qty}</span>
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