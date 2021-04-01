import { Button } from 'react-bootstrap';
import React from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';

const Checkout = () => {
    const { _id } = useParams();
    const [selected , setSelected] = useState([])
    
    useEffect(() =>{
        const url = `http://localhost:5000/products`
        fetch(url)
        .then(res => res.json())
        .then(data => setSelected(data))
    },[])
    return (
        <div>
            <h1>Checkout</h1>
            <Table className="mt-5" striped bordered variant="dark">
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
                        <td colSpan="2"><Button variant="outline-light"size="lg">Checkout</Button></td>
                        <td>Total = $ {selected.price}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default Checkout;