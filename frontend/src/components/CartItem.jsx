import React from 'react'
import {useCart} from '../CartContext'
import {Stack,Button} from 'react-bootstrap'

const CartItem = ({item}) => {
const product = item.product
const {removeFromCart} = useCart()
const currency = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD' })

  return (
    <Stack direction = "horizontal" 
            gap={2} 
            className='d-flex align-items-center'>
        <img src={product.image} alt={product.title} style={{width: '125px', height: '75px'}}/>
        <div className='me-auto'>
            <div>
                {product.title} {item.quantity > 1 && (
                <span className="text-muted" style={{fontSize:"0.7em"}}>
                    x{item.quantity}
                </span>
                )}
            </div>
            <div className='text-muted'>
                {currency.format(product.price)}
            </div>
        </div>
        <div>
            {currency.format(product.price * item.quantity)}
        </div>
            <Button variant="outline-danger" size="sm" onClick={()=> removeFromCart(product._id)}>&times;</Button>
    </Stack>
  )
}

export default CartItem