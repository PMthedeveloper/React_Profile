import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3002/users");
    setUser(result.data.reverse());
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3002/users/${id}`);
    loadUsers();
  };

  return (
    <>
      <div className="container">
        <div className="py-4">
          <h1>View Page</h1>
          <div className="container my-4">
            <div className="input-group mb-3">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Search user"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>

            <table className="table border shadow" id="myTable">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Sr no.</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">DOB</th>
                  <th scope="col" className="text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {users
                  // eslint-disable-next-line array-callback-return
                  .filter((user) => {
                    if (search === "") {
                      return user;
                    } else if (
                      user.firstname
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    ) {
                      return user;
                    }
                  })
                  .map((user, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td name={user.firstname}>{user.firstname}</td>
                      <td>{user.lastname}</td>
                      <td>{user.email}</td>
                      <td>{user.dob}</td>
                      <td>
                        <Link
                          className="btn btn-primary mx-2"
                          to={`/users/${user.id}`}
                        >
                          View
                        </Link>
                        <Link
                          className="btn btn-success mx-2"
                          to={`/users/edit/${user.id}`}
                        >
                          Edit
                        </Link>
                        <Link
                          className="btn btn-outline-danger mx-2"
                          onClick={() => deleteUser(user.id)}
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
