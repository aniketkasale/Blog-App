import React from "react";
import Axios from "axios";


import { useState } from "react";
import { useEffect } from "react";
function AutherName() {
  
  const [auther,setAuther]=useState([]);
  useEffect((id) => {
    const data = JSON.parse(localStorage.getItem("details"));
    Axios.get(`https://jsonplaceholder.typicode.com/users/${data.id}`)
      .then((response) => {
        // handle success
        console.log("comment", response.data);
        if (response.status === 200) {
          setAuther(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  return (
    <div> 
      <span><h4><b>Auther : </b>{auther.name}.</h4>
      </span>

          
       
    </div>
  );
}

export default AutherName;
