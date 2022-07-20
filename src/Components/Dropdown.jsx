import React, { Component, useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import Button from "./Button.js";
import "./DashboardStyle.css";
import logo1 from "./images.jpg";

const data = [{ id: 0, label: "Istanbul, TR (AHL)" }, { id: 1, label: "Paris, FR (CDG)" }, { id: 3, label: "Jounieh, J (CDG)" }];

const Dropdown = () => {
    const [isOpen, setOpen] = useState(false);
    const [items, setItem] = useState(data);
    const [selectedItem, setSelectedItem] = useState(null);
    const navigate = useNavigate();
    
    const toggleDropdown = () => setOpen(!isOpen);

    const handleItemClick = (id) => {
        selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
    }
   
    return (
            <div className='dropdown'>
                <div className='dropdown-header' onClick={toggleDropdown}>
                    {selectedItem ? items.find(item => item.id == selectedItem).label : "Select your destination"}
                    <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
                </div>
                <div className={`dropdown-body ${isOpen && 'open'}`}>
                    {items.map(item => (
                        <div className="dropdown-item" onClick={e => handleItemClick(e.target.id)} id={item.id}>
                            <span className={`dropdown-item-dot ${item.id == selectedItem && 'selected'}`}>• </span>
                            {item.label}
                        </div>
                    ))}
                </div>
            </div>
    )
}
export default Dropdown;