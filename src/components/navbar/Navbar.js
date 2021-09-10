import React, { useState } from 'react'
import { Hamburger, Logo, Menu, MenuLink, Nav } from './NavbarStyle'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Nav>
            <Logo to="/">
                <i>{"<CLRSWY/>"}<span>recipie</span></i>
            </Logo>

            <Hamburger onClick={()=>setIsOpen(!isOpen)}>
                <span/>
                <span/>
                <span/>
            </Hamburger>

            <Menu isOpen={isOpen}>
                <MenuLink to="/about">About</MenuLink>
                <MenuLink to="/logout">Logout</MenuLink>
            </Menu>
        </Nav>
    )
}

export default Navbar
