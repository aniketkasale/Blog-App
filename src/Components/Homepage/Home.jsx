import React, { useEffect, useState } from "react";
import Axios from "axios";
import Title from "../Title/Title";
import { withRouter } from "react-router";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home(props) {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // handle success
        if (response.status === 200) {
          setUserData(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleClick = (id) => {
    props.history.push("/landing");
    Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        // handle success
        if (response.status === 200) {
          localStorage.setItem("details", JSON.stringify(response.data));
          //   props.history.push("/landing");
        }
        console.log("dataid", response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  return (
    <div>
      
      {userData.map((items) => (
        <Title
          key={items.id}
          t={items.title}
          postId={items.id}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

export default withRouter(Home);
