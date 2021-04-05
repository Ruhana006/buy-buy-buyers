import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import Header from '../Header/Header';
import Products from '../Products/Products';
import ManageProduct from './ManageProduct';

const Manage = (props) => {
    
    const [manageProduct, setManageProduct] = useState([]);
    useEffect(() => {
        fetch('https://peaceful-taiga-70194.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setManageProduct(data))
    }, [])
    return (
        <div>
            <Header />
            <div className="container">
                <h1>this is manage</h1>
                {
                    manageProduct.map(manage => <ManageProduct manage = {manage}></ManageProduct>)
                }   
            </div>

        </div>
    );
};

export default Manage;
 