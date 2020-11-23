import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';

function LoginForm() {
    console.log("login called")
    var adminUser = {};
    var error = "";
    const [details, setDetails] = useState({name:"",email:"",password:""});

    
    const submitHandler = e =>{
        // e.preventDefault();

        console.log("insdi form")
        if(sessionStorage.getItem('userCred')){
            if(sessionStorage.getItem('userCred')){
                adminUser = JSON.parse(sessionStorage.getItem('userCred'))
            }
          }
          
          console.log(details);
          console.log(adminUser);
          if(details.email == adminUser.email && details.password == adminUser.password){
            console.log("Logged in")
          //   setUser({
          //     name:details.name,
          //     email:details.email
          //   });
            sessionStorage.setItem('isLogin', true);
            // this.context.router.transitionTo("/home"); 
            <Redirect to='/home' />
          }else {
            console.log("Details not matched!");
            error = "Details not matched!";
            return false;
          }
    }

    if(sessionStorage.getItem('isLogin') && sessionStorage.getItem('isLogin') == 'true'){
       
        console.log("inside session ")
        return <Redirect to='/home' />;
    }else{    
        return (
            <form>
                <div className="form-inner">
                    <h2>Login</h2>
                    {(error != "") ? (<div className="error">{error}</div>): ""} 
                    <div className="form-group">
                        <label htmlFor="email" id="email">Email:</label>
                        <input type="email" name="email" id="email"onChange={ e => setDetails({...details, email: e.target.value})} value={details.email}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" id="password">Password:</label>
                        <input type="password" name="password" id="password" onChange={ e => setDetails({...details, password: e.target.value})} value={details.password}/>
                    </div>
                    <input type="submit" value="Login" onClick={submitHandler}/>
                </div>
          </form>
        )
    }

    
}



export default LoginForm;