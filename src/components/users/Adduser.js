import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Adduser = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        dob: "",
        ShortBIO: ""
    })
    const { firstname, lastname, email, dob, ShortBIO } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3002/users", user);
        history.push("/view");
    };
    return (
        <>
            <div className="container">
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center mb-4">Add A User</h2>
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="form-group needs-validation" novalidate>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Your First Name"
                                name="firstname"
                                value={firstname}
                                onChange={e => onInputChange(e)}
                                required />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Your Lastname"
                                name="lastname"
                                value={lastname}
                                onChange={e => onInputChange(e)}
                                required />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control form-control-lg"
                                placeholder="Enter Your E-mail Address"
                                name="email"
                                value={email}
                                onChange={e => onInputChange(e)}
                                required />
                        </div>
                        <div className="form-group">
                        <div id="emailHelp" class="form-text">Your date of birth</div>
                            <input
                                type="date"
                                className="form-control form-control-lg"
                                name="dob"
                                value={dob}
                                onChange={e => onInputChange(e)}
                                required />
                        </div>
                        <div className="form-group">
                            <textarea
                                type="text"
                                rows="3"
                                className="form-control form-control-lg"
                                placeholder="Enter Your Short Bio"
                                name="ShortBIO"
                                value={ShortBIO}
                                onChange={e => onInputChange(e)}
                                required/>
                        </div>
                        <button className="btn btn-primary btn-block">Add User</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Adduser;