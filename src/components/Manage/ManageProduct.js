import { Button } from 'react-bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const ManageProduct = (props) => {
    const {_id, name ,price} = props.manage;
    console.log(name,price);
    const history = useHistory()

    const deleteProduct = (_id,product)=>{
        
        fetch(`https://peaceful-taiga-70194.herokuapp.com/delete/${_id}`,{
            method: 'DELETE'
        })
          .then(res => res.json())
          .then(result => {
              if(result){
                  props.target.parentNode.style.display = 'none';
                  history.go(0)
              }
              console.log('result',result);
          })
    }
    return (
        <div>
            <Card style={{height:"160px"}} className="mb-4">
                <Card.Body>
                    <Card.Title><h2>{name}</h2></Card.Title>
                    <Card.Text>
                        <h4>$ {price}</h4>
                    </Card.Text>
                    <Button onclick={()=> deleteProduct(_id)} variant="outline-danger">Delete Product</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ManageProduct;