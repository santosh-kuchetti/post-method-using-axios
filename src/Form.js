import React, { useEffect, useState } from "react";
import axios from "axios";

export const Form = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // getting data from api
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handleButton = (e) => {
    e.preventDefault();
    // using post method, we can post the details that we want to our data. here
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        name,
        email
      })
      .then((res) => {
        console.log("posted data is ", res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <input
        style={{ marginBottom: "4px" }}
        onChange={(e) => setName(e.target.value)}
        type="name"
      />
      <br />
      <input
        style={{ marginBottom: "4px" }}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      />
      <br />

      <button onClick={handleButton} type="submit">
        Submit
      </button>
      <div>
        {data.map((ele, i) => (
          <>
            <h3>{ele.name}</h3>
            <h3>{ele.email}</h3>
          </>
        ))}
      </div>
    </>
  );
};
