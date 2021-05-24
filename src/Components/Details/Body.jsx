import React from "react";
import Axios from "axios";


import { useState } from "react";
import { useEffect } from "react";
import AutherName from "./Auther";
function Body() {
  
  const [body,setBody]=useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("details"));
    Axios.get(`https://jsonplaceholder.typicode.com/posts/${data.id}`)
      .then((response) => {
        // handle success
        console.log("comment", response.data);
        if (response.status === 200) {
          setBody(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  return (
    <div> 
      <span><h2><b>Title : </b>{body.title}.</h2>
      <h4><b>Body :  </b>{body.body}.</h4></span>
        <AutherName/>
          
       
    </div>
  );
}

export default Body;
