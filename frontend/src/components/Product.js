import React from 'react'
import { Card } from 'react-bootstrap'

const Product = ({ product }) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <a href={`/product/${product.id}`}>
                <Card.Img src={product.image} variant='top' />
            </a>

            <Card.Body>
                <a href={`/product/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </a>

                {/* do not forget to change this so that a customer can click a heart button and add it to his or her wishlist. */}

                <Card.Text as='div'>
                    <div className='my-3'>
                        {product.rating} from {product.numReviews} reviews
                    </div>
                </Card.Text>

                <Card.Text as='h3'>
                    ${product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
