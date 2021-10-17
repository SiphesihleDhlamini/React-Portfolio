import React from 'react';
import {
    Nav,
    NavLogo,
    NavLink,
    NavMenu,
    Bars,
    NavBtn,
    NavBtnLink,
}from "./NavbarElements";

const Navbar = () => {
    return (

        <Nav>
            <NavLogo to="/">
                Logo
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink to="/" activestyle>
                    Home
                </NavLink>
                <NavLink to="/about" activestyle>
                    About
                </NavLink>
                <NavLink to="/contact" activestyle>
                    Contact
                </NavLink>
                <NavLink to="/signin" activestyle>
                    Sign In
                </NavLink>
                <NavBtn>
                    <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
                </NavBtn>
            </NavMenu>

        </Nav>
    );
}
export default Navbar;
