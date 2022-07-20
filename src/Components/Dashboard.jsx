import React, { Component, useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import Button from "./Button.js";
import "./DashboardStyle.css";
import logo1 from "./images.jpg";
import Dropdown from './Dropdown.jsx';

const Dashboard = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className='header'>
                <h1>
                    <img src={logo1} className="Dashboard-logo" alt="logo" onClick={() => navigate('/homePage')} />
                    Welcome to Dashboard
                </h1>
            </div>

            <div>
                <Dropdown />
            </div>
        </>
    )
}

export default Dashboard;