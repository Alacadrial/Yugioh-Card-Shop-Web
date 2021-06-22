import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../shared/theme.css'
import './main.css'
import NavbarItem from '../components/navbar-item/component'
import Logo from '../components/logo/component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch, faBars, faInfo } from '@fortawesome/free-solid-svg-icons'
import { Collapse, Nav, Navbar, NavbarToggler, NavItem } from 'reactstrap'

function MainLayout({children}) {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <div className="main-layout d-flex flex-column">
            <div className="d-flex flex-column py-4 px-5" style={{boxShadow: '0px 1px 20px 5px rgba(0, 0, 0, 0.1)'}}>
                <div className="d-flex align-items-center">
                    <Link to="/" className="img-fluid" style={{textDecoration: 'none'}}>
                        <Logo/>
                    </Link>
                    <div className="d-flex flex-grow-1 justify-content-end">
                        <NavbarItem text="Search" icon={faSearch} linkTo="/cards"></NavbarItem>
                        <NavbarItem text="Cart" icon={faShoppingCart} linkTo="/cart" className="ms-3"></NavbarItem>
                    </div>
                </div>
                <hr></hr>
                <Navbar color="light" light expand="md" className="bg-transparent" style={{paddingBottom: '0'}}>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <Link to="/cards" style={{textDecoration: 'none', userSelect: 'none'}}>
                                <NavItem className="bs-navitem">
                                    <FontAwesomeIcon icon={faBars} className="me-2"/>
                                    <span className="me-4">Cards</span>
                                </NavItem>
                            </Link>
                        </Nav>
                        <Nav className="mr-auto" navbar>
                            <Link to="/about" style={{textDecoration: 'none', userSelect: 'none'}}>
                                <NavItem className="bs-navitem">
                                    <FontAwesomeIcon icon={faInfo} className="me-2"/>
                                    <span className="me-4">About</span>
                                </NavItem>
                            </Link>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
            <div>
                {children}
            </div>
            <div>
                <footer className="Footer">
                    <p>Copyright &copy; 2021</p>
                </footer>
            </div>
        </div>
    )
}

export default MainLayout

