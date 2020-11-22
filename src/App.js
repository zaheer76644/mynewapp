import React, {useState} from 'react';
import { Redirect } from 'react-router';

import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/HomePages/Home';
import Task from './components/task';
import User from './components/user';
import Password from './components/PasswordPage';


function App() {
  var adminUser = {};
  if(sessionStorage.getItem('userCred')){
    if(sessionStorage.getItem('userCred')){
        adminUser = JSON.parse(sessionStorage.getItem('userCred'))
    }
  }else{
      var adminValue = {
        email:"admin@admin.com",
        password:"admin123"
      }
      sessionStorage.setItem('userCred', JSON.stringify(adminValue));
  }
  
 

  // if(sessionStorage.getItem('isLogin') && sessionStorage.getItem('isLogin') == 'true'){
    <Navbar />
  // }
  
  return (
    <Router>
      
      <Switch>
        
        <Route path='/' exact component={LoginForm} />
        {/* <Route path='/login' exact component={LoginForm} /> */}
        <Route path='/home' exact component={Home} />
        <Route path='/task' exact component={Task} />
        <Route path='/user' exact component={User} />
        <Route path='/PasswordPage' exact component={Password} />
        
      </Switch>
    </Router>
   
  );
}

export default App;