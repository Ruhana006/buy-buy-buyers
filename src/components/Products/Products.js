import { Button } from 'react-bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Products = (props) => {
    // console.log(props)
    const { _id, name, price, imageURL } = props.product;

    const history = useHistory();
    const handleBuyNow = (_id) => {
        const url = `/products/${_id}`;
        history.push(url);
    }
    return (
        <div className="container-fluid col-md-4 col-sm-6 mt-5">
            <Card className="card" style={{ width: '300px', borderRadius: '10px', boxShadow: '1px 1px 3px grey' }}>
                <Card.Img variant="top" src={imageURL} style={{ height: '250px', width: '300px' }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <h4>$ {price}</h4>
                    </Card.Text>
                    <Button onClick={() => handleBuyNow(_id)} variant="outline-secondary" size="lg">Buy Now</Button>
                    
                </Card.Body>
            </Card>
        </div>
    );
};

export default Products;