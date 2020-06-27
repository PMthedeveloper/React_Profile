import React from 'react';
import {Link} from 'react-router-dom';


const Index = () => {
    return(
        <>
        <div className="index">
        <h1>WELCOME</h1>
        </div>
            <Link className="btn btn-dark" id="btn1" to="/view">View Users
            </Link>
            <Link className="btn btn-success" id="btn2" to="/users/add">Create User
            </Link>
        </>
    )
}

export default Index;