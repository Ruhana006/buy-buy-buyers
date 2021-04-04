import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import OrderDetails from '../OrderDetails/OrderDetails';

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [ordered , setOrdered] = useState([])
    const {_id} = useParams()
    useEffect(() => {
        fetch('https://peaceful-taiga-70194.herokuapp.com/productorders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    
    return (
        <div>
            <Header/>
            <div>
                <h1 style={{textAlign : 'center'}}>These are your orders</h1>
                {
                    orders.map(order => <OrderDetails order = {order}></OrderDetails>)
                }
            </div>
            
        </div>
    );
};

export default Order;