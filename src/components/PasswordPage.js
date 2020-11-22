import React,{useState} from 'react'
import { Redirect } from 'react-router-dom';
import Navbar from './Navbar';

var userData = {};

function PasswordPage() {
   
    const [userInfo, setDetails] = useState({password:""});

    const changePassword = e =>{
        // console.log(userInfo);
        var loggedUser = JSON.parse(sessionStorage.getItem('userCred'));
        loggedUser.password = userInfo.password;
        sessionStorage.setItem('userCred', JSON.stringify(loggedUser));
        alert("Password changed successfully")
    }

    if(sessionStorage.getItem('userCred') && sessionStorage.getItem('isLogin') == 'true'){
        userData = JSON.parse( sessionStorage.getItem('userCred') )
        return (
            <>
             <Navbar />
            <form>
            <div className="form-inner">
                <div className="form-group">
                    <label htmlFor="email" id="email">UserEmail:</label>
                    <input type="email" name="email" id="email" readOnly value={userData.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password" id="password">New Password:</label>
                    <input type="password" name="password" id="password" onChange={ e => setDetails({...userInfo, password: e.target.value})}/>
                </div>
                <button onClick={() => changePassword()}>Save Password</button>
                </div>
                
                </form>
              </>  
        )
    }else{
        return <Redirect to='/' />;
    }
}

const changePassword = function(){
    // console.log(userInfo)
    // var loggedUser = JSON.parse(sessionStorage.getItem('userCred'));
    // loggedUser.password = value;
    // sessionStorage.setItem('userCred', JSON.stringify(loggedUser));
}

export default PasswordPage
