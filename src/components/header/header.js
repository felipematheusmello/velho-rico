import React from 'react';
import './header.css'

function Header({children}) {
    return (
        <div className="container-header">
           {children}
        </div>
    )
}

export default Header