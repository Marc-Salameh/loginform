import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./Components/homePage";
import Dashboard from "./Components/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";

const Views = () => {
    return (
        <Routes>
            <Route path= "/" element = {<Navigate to="/homepage"></Navigate>} />  //empty url 
            <Route path = "*" element = {<Navigate to="/homepage"></Navigate>}/>   //any other or invalid url will make me return to the homepage
            <Route path="/homepage" element={<Homepage />} />
            <Route element={<ProtectedRoutes />} >  //all restricted tabs must be insreted inside ProtectedRoutes
                <Route path='/Dashboard' element={<Dashboard />} />
            </Route>
        </Routes>
    );
};

export default Views;