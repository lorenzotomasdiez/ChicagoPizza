import React from 'react'
import { Bars, Nav, NavIcon, NavLink } from './NavBarElements'

const Navbar = () => {
    return (
        <div>
           <Nav>
            <NavLink to='/'>CHICAGO</NavLink>
            <NavIcon>
                <p>Menu</p>
                <Bars/>
            </NavIcon>
            </Nav> 
        </div>
    )
}

export default Navbar
