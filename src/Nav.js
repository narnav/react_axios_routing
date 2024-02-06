import React from 'react'
import { Link, Outlet } from "react-router-dom";
const Nav = () => {
    return (
        <div>
            <Link to="/">Home</Link>{" "}
            <Link to="/samp">samp</Link>{" "}
            <Link to="/shop">shop</Link>{" "}
            <Link to="/waga">waga</Link>
        </div>
    )
}

export default Nav