import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewUser = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    dob: "",
    ShortBIO: ""
  });
  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3002/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
        <br/>
        <br/>
      <h1 className="display-8">Name :  {user.firstname} {user.lastname}</h1>
      <hr />
      <ul className="list-group w-60">
        <li className="list-group-item"><b>Email: </b>{user.email}</li>
        <li className="list-group-item"><b>Date Of Birth: </b>{user.dob}</li>
        <li className="list-group-item"><b>BIO: </b>{user.ShortBIO}</li>
      </ul>
    </div>
  );
};

export default ViewUser;