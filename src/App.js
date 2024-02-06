import { useEffect, useState } from "react";
import {  Outlet } from "react-router-dom";
import Nav from "./Nav";

const App = () => {
    return (
        <div >
            Hello - i'm the app commponent
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
}

export default App;


