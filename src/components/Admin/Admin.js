import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './Admin.css'
const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL , setImageURL] = useState()
    
    const onSubmit = data => {
        // console.log(data);
          const productData = {
              name : data.name,
              price : data.price,
              imageURL : imageURL
          };
           const url = `https://peaceful-taiga-70194.herokuapp.com/admin` ;
           console.log(productData);
           fetch (url, {
               method : 'POST',
               headers : {
                   'Content-Type': 'application/json'
               },
               body : JSON.stringify(productData)
           })
           .then (res => console.log('server responded' , res))
        };
    
    const handleImgUpload = e => {
        console.log(e.target.files[0]);
        const imageData = new FormData();
        imageData.set('key','41aa0ea53e2b5e8fc67eb6ccb484ab49');
        imageData.append('image',e.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
        imageData)
        .then(function(response){
            setImageURL(response.data.data.display_url);
        })
        .catch(function(error){
            console.log(error);
        })
    }
    return (
        <div className="container mt-5" >
            <div >
               <Link className="link" to="/manage">Manage Product</Link>
            </div>
            <div className="mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label><h4>Add Your Product</h4></label>
                <br/>
                <input className="form-input" name="name" defaultValue="new product" type="text" ref={register} />
                <br/>
                <label><h4>Price</h4></label>
                <br/>
                <input className="form-input" name="price" defaultValue="test" type="number" ref={register} />
                <br/>
                <label><h4>Add File</h4></label>
                <br/>
                <input name="exampleRequired" type="file" onChange={handleImgUpload} />
                <br/>
                {errors.exampleRequired && <span>This field is required</span>}
                <br/>
                <input className="submit-btn" type="submit" />
            </form>
            </div>
        </div>
    );
};

export default Admin;