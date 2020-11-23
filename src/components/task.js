import React from 'react';
import Navbar from './Navbar';
import $ from 'jquery';
import './task.css';

const header = ["User Id.", "Title", "Value", "Action"];
var userData = {};
var state = {
    reload: false
  };

function task() {
   
    if(sessionStorage.getItem('userData')){
        userData = JSON.parse( sessionStorage.getItem('userData') )
        return renderObj(userData);
    }else{
        return getUserData();
    }
    
}

function getUserData(){
    const apiUrl = 'http://jsonplaceholder.typicode.com/todos';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
          userData = data;
          sessionStorage.setItem('userData', JSON.stringify(userData))
          renderObj(userData);
        });
}

function renderObj(userData){
    return (
    <>
        <Navbar />
    <table id="userDataTable">
        <thead>
        <tr>{header.map((h, i) => <th key={i}>{h}</th>)}</tr>
        </thead>
        <tbody>
        {Object.keys(userData).map((k, i) => {
            let data = userData[k];
            return (
            <tr id={i} key={i}>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.completed.toString()}</td>
                <td><button className="btn1" onClick={() => deleteUserData(data.id, i)}>Delete</button></td>
            </tr>
            );
        })}
        </tbody>
    </table>
    </>
    );
}

const deleteUserData = function(userId, i){
    console.log(i)
    userData.forEach(function(e, index){
        if(userId == e.id){
            userData.splice(index, 1);
        }
    })
    sessionStorage.setItem('userData', JSON.stringify(userData));
    $('#userDataTable #'+i).remove();
    alert("User with Id : "+userId+" is deleted.");
}


export default task
