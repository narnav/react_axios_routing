import React from 'react'
import { Link, Outlet } from "react-router-dom";
const Shop = () => {
    return (
        <div>Shop
            <Link to="/shop/meat">meat</Link>{"           "}
            <Link to="/shop/dairy">dairy</Link>{" "}
            <Link to="/shop/allcats/1">toys</Link>{" "}
            <Link to="/shop/allcats/2">food</Link>{" "}
            <Link to="/shop/allcats/3">weapons</Link>{" "}
            <Outlet></Outlet>
        </div>
    )
}
export default Shop