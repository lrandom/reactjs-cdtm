import './Nav.css';
import React from "react";

//react hook
/*
function Nav() {
    return (
        <nav className='nav'>
            <div><a href="">Home</a></div>
            <div><a href="">Category</a></div>
            <div><a href="">About</a></div>
            <div><a href="">Contact</a></div>
        </nav>
    )
}
*/

//hướng class (cách cổ truyền)
class Nav extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
        <nav className='nav'>
            <div><a href="">Home</a></div>
            <div><a href="">Category</a></div>
            <div><a href="">About</a></div>
            <div><a href="">Contact</a></div>
        </nav>)
    }
}

export default Nav;
