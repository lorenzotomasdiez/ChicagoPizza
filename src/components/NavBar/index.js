import React from 'react'
import { Bars, Nav, NavIcon, NavLink } from './NavBarElements'

const Navbar = ({toggle}) => {
    return (
        <div>
           <Nav>
            <NavLink to='/'>CHICAGO</NavLink>
            <NavIcon onClick={toggle}> 
                <p>Menu</p>
                <Bars/>
            </NavIcon>
            </Nav> 
        </div>
    )
}

export default Navbar
