import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './component.css'

const NavbarItem = (props) => {
    return (
        <Link to={ props.linkTo } className={`navbar-item d-flex align-items-end ${props.className}`}>
            <h5 className="navbar-item-link">{ props.text }</h5>
            <span>
                <FontAwesomeIcon icon={props.icon} style={{fontSize: '1rem'}}></FontAwesomeIcon>
            </span>
        </Link>
    )
}

export default NavbarItem
