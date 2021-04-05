import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Header from '../Header/Header';
import Products from "../Products/Products"

const Home = () => {
    const [products , setProducts] = useState([])

    
    useEffect(()=>{
       fetch('https://peaceful-taiga-70194.herokuapp.com/products')
       .then(res => res.json())
       .then(data => setProducts(data))
    },[])
   
    
    return (
        <div>
            <Header/>
            <div className='d-flex justify-content-center'>
            {products ? <Spinner className="d-none" animation="border" /> : <Spinner  animation="border" />}
            </div>
            <div className="row">
                
               {
                   products.map(product => <Products product={product}></Products>)
               }
            </div>
        </div>
    );
};

export default Home;