import React from 'react';
import { ListGroup } from 'react-bootstrap';



const OrderDetails = (props) => {
    const { name, email, productName, productPrice } = props.order;

    return (

        <div className="container mt-5">
            <ListGroup variant="flush">
                <ListGroup.Item><h4>Product name : {productName}</h4></ListGroup.Item>
                <ListGroup.Item><h5>Price : $ {productPrice} </h5></ListGroup.Item>
                <ListGroup.Item><h5>Buyer : {name} </h5></ListGroup.Item>
                <ListGroup.Item><h5>Username : {email}</h5></ListGroup.Item>
                <br/>
            </ListGroup>

        </div>

    );
};

export default OrderDetails;