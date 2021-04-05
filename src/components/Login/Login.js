import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig";
import './Login.css'
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

firebase.initializeApp(firebaseConfig);
if (!firebase.app.length) {
    firebase.initializeApp({});
} else {
    firebase.app();
}

const Login = () => {
    const [loggedInUser , setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const {from} = location.state || {from:{pathname:"/"}};

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            console.log(signedInUser);
            setLoggedInUser(signedInUser);
            history.replace(from);
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }
    return (
        <div className=" mt-5" style={{ textAlign: 'center' }}>
            <h1 style ={{fontFamily : 'bold',fontSize:'40px',fontWeight:'700'}}>Please Login to place order</h1>
            <br />
            <button className="google-signin" onClick={handleGoogleSignIn}> Sign in with Google</button>
        </div>
    );
};

export default Login;