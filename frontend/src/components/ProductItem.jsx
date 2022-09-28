import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


export default function ProductItem({product}) {
    return (
        <Card style={{ width: '14em'}}>
        <Link to={`/products/${product._id}`} state={product}>
            <Card.Img
                style={{ width: '200px', height: '200px'}}
                src={product.image}
            />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
            </Card.Body>
        </Link>
        </Card>
    )
}
