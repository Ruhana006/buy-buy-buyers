import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL ,setImageURL] = useState()
    
    const onSubmit = data => {
        const productData = {
            name : data.name,
            imageURL : imageURL
        }
        const url = `http://localhost:5000/admin`
        // console.log(productData)
        fetch(url,{
            method : 'POST',
            headers: {
                'content-type':'application/json'
            },
            body : JSON.stringify(productData)
        })
        .then(res=> console.log('responded server',res))
    };
    
    const handleImgUpload = e => {
        console.log(e.target.files[0]);
        const imageData = new FormData();
        imageData.set('key','41aa0ea53e2b5e8fc67eb6ccb484ab49');
        imageData.append('image',e.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
        imageData)
        .then(function(response){
            console.log(response.data.data.display_url);
        })
        .catch(function(error){
            console.log(error);
        })
    }
    return (
        <div >
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" defaultValue="New Product" ref={register} />
                <br/>
                <input name="price" defaultValue="test" ref={register} />
                <br/>
                <input name="exampleRequired" type="file" onChange={handleImgUpload} />
                <br/>
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default Admin;