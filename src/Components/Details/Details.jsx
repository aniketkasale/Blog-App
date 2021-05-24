import React from "react";
import Axios from "axios";
import { Jumbotron,Card } from "react-bootstrap";
import { withRouter } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import Body from "./Body";
function Details() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("details"));
    Axios.get(`https://jsonplaceholder.typicode.com/posts/${data.id}/comments`)
      .then((response) => {
        // handle success
        console.log("comment", response.data);
        if (response.status === 200) {
          setComments(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Jumbotron>
        
        <Body />
      </Jumbotron>

      <h3>Comments  </h3>
      {comments.map((item, i) => (
        <div key={item.id}>
          
          
  <Card>
    <Card.Header>
    <span>{i+1}. {item.body}</span>
    </Card.Header>
    
  </Card>
  
          
          
        </div>
      ))}
    </div>
  );
}

export default withRouter(Details);
