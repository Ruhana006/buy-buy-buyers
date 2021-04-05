import { Button } from 'react-bootstrap';
import React from 'react';
import { Table } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';
import Header from '../Header/Header';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Checkout = () => {
    const { _id } = useParams();
    const history = useHistory()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selected, setSelected] = useState([]);
    const dateTime = new Date().toLocaleString();


    useEffect(() => {
        const url = ('https://peaceful-taiga-70194.herokuapp.com/products/' + _id)
        fetch(url)
            .then(res => res.json())
            .then(data => setSelected(data[0]))

    }, [_id])

    const handleCheckout = (_id) => {
        const url = `/productorders`;
        history.push(url)

        const productName = selected.name;
        const productPrice = selected.price;
        console.log(productName, productPrice);
        const newOrder = { ...loggedInUser, productName, productPrice }
        fetch('https://peaceful-taiga-70194.herokuapp.com/order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }
    
    return (
        <div>
            <Header />
            <h1 style ={{textAlign:'center',fontFamily : 'bold',fontSize:'40px',fontWeight:'700'}}>Checkout</h1>
            <Table className="container mt-5" striped bordered variant="dark">
                <thead>
                    <tr>
                        <th>Description</th>
                        <td>Quantity</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{selected.name}</th>
                        <td>1</td>
                        <td>$ {selected.price}</td>
                    </tr>
                    <tr>
                        <th></th>
                        <td>1</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td ><Button onClick={() => handleCheckout()} variant="outline-light" size="lg">Checkout</Button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default Checkout;