import React, {usestate} from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import './user.css'
var userData = {};

function user() {
    if(sessionStorage.getItem('userCred') && sessionStorage.getItem('isLogin') == 'true'){
        userData = JSON.parse( sessionStorage.getItem('userCred') )
        return renderObj(userData);
    }else{
        return <Redirect to='/' />;
    }
}

function renderObj(userData){

    return (
        <>
             <Navbar />
        <div className="user1">
            Username: {userData.email}
            <br></br>
            Password: {userData.password}
            <br></br>
        < Link to='/PasswordPage' className='linking'>
                Change Password</Link>
        </div>
        </>
    )

    }
export default user
