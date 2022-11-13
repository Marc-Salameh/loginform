import { useEffect } from "react";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";


const ProtectedRoutes = (props) => {
    const nv = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem('loginToken')) {
            nv("/homepage")
        }
    

    }, [])


    return <Outlet />

}

export default ProtectedRoutes;
