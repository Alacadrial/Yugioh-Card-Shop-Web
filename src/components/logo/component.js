import React from 'react'
import './component.css'

const Logo = () => {
    return (
        <div className="d-flex flex-column border border-3 border-dark p-3" 
             style={{color: '#000', fontFamily: 'Verdana', 
                     filter: 'drop-shadow(2px 4px 5px rgba(0,0,0,0.4))', 
                     backgroundImage: 'linear-gradient(17deg, rgba(0,0,0,0.25), transparent)', 
                     userSelect: 'none',
                     }}>
            <h5 style={{WebkitTextStroke: '0.2px black'}}>Yugioh Card Shop</h5>
        </div>
    )
}

export default Logo
