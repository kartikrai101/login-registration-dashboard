import { useState, useEffect } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserList = () => {

    const [userList, setUserList] = useState([]);

    useEffect(() => {
        const url = 'http://127.0.0.1:3001/users/all';
        axios.get(url)
        .then(response => {
            if(response.message === 'No registered user found!'){
                setUserList([]);
            }else{
                console.log(response.data.body[0])
                setUserList(response.data.body);
            }
        })
    }, [])

    return (
        userList.length !== 0 && <div>
            <div className="d-flex justify-content-center align-items-center text-center mt-3">
                <h1 className="text">Registered Users</h1>
            </div>
            <hr className="my-4" />
            <div className="row d-flex justify-content-center">
                {
                    userList.map((user, index) => {
                        return (
                            <div key={index} 
                                className="card shadow-sm my-2 mx-4 p-3 col-md-3"
                                style={{
                                    borderRadius: '0.75rem',
                                    transition: 'box-shadow 0.3s',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 1)'}
                                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)'}
                            >
                                <p className="font-weight-bold">UserId: <span className="text-success">{user._id}</span></p>
                                <p>Name: {user.name}</p>
                                <p>Email: {user.email}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default UserList;