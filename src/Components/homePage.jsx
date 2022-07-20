import React, { useMemo } from 'react';
import logo1 from "./LogoUSEK.jpg";
import icon from "./face-icon-0.jpg";
import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button.js";

const Homepage = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const navigate = useNavigate();
    const [uname, setUname] = useState('');
    const [pwd, setPwd] = useState('');

    const onChange = (id) => (e) => {
        if (id === 'uname') {
            setUname(e.target.value)
        }
        else if (id === 'pwd') {
            setPwd(e.target.value)
        }
    }

    // User Login info
    const database = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "user2",
            password: "pass2"
        }
    ];


    const errors = {
        uname: "Invalid Username",
        pass: "Invalid Password",
    };

    const handleSubmit = (e) => {
        //Prevent page reload
        e.preventDefault();

        // Find user login info
        const userData = database.find((user) => user.username === uname);

        // Compare user info
        if (userData) {
            if (userData.password !== pwd) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else if (userData.password !== pwd && userData.username !== uname) {
                setErrorMessages({ name: "uname", message: errors.uname });
            } else {
                navigateToDashboard();
            }
        } else {
            setErrorMessages({ name: "uname", message: errors.uname });

        }
    };

    // Displaying the error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (<div className="error"> <h3>{errorMessages.message} </h3></div>);


    const resetErrorMessage = () => {
        setErrorMessages({});
    };

    //registering a token(username and password) transfering from type object to type string (by using JSON stringify) 
    const navigateToDashboard = () => {
        sessionStorage.setItem('loginToken', JSON.stringify({ uname, pwd })) // must be of type string
        navigate('/Dashboard');
    }



    //  code for login form
    const handleForm = useMemo(() => {
        return (
            <div className="form">

                <div className="input-container">
                    <p></p>
                    <label>
                        <div>
                            <h3 id="username">Username <p> </p>
                                <input type="text" name="uname" placeholder='Enter your Username' onInput={resetErrorMessage} value={uname} onChange={onChange('uname')} required />
                            </h3>
                        </div>
                    </label>
                    {renderErrorMessage("uname")}

                </div>

                <div className="input-container">
                    <p></p>
                    <label> <div> <h3 id='username'> Password</h3>  </div> </label>
                    <input type="password" name="pass" placeholder='Enter your Password' onInput={resetErrorMessage} value={pwd} onChange={onChange('pwd')} required />
                    {renderErrorMessage("pass")}

                </div>

                <div className="button-container">
                    <h1> </h1>
                    <Button symbol="LogIn" handleClick={handleSubmit} />


                </div>



            </div >
        )
    }, [errorMessages]);

    return (
        <div>
            <div className="App">
                <header className="App-header">
                    <img src={logo1} className="App-logo" alt="logo" onClick={() => window.location.reload(false)} />
                </header>
                <h2> Please Log In</h2>
                <img src={icon} className="App-icon" alt="logo" />
                <div className="app">
                    <div className="login-form">
                        <div className="title">
                            {

                                handleForm
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage