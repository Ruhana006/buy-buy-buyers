import { Button } from 'react-bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Products = (props) => {
    // console.log(props)
    const {_id,name,price,imageURL} = props.product;
    const history = useHistory();
    const handleBuyNow = (_id) => {
        const url = `/products/${_id}`;
        history.push(url);
    }
    return (
        <div className="container col-md-4 mt-5">
            <Card className="card" style={{width:'300px'}}>
                <Card.Img variant="top" src={imageURL} style={{ height: '250px', width: '300px' }}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                       <h4>$ {price}</h4>
                    </Card.Text>
                    <Button onClick={()=>handleBuyNow(_id)} variant="outline-secondary" size="lg">Buy Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Products;