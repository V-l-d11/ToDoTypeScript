import React from 'react';
import {NavLink} from 'react-router-dom';



export const NavBar: React.FunctionComponent = () => (
    <nav>
        <div className="nav-wrapper px1">
            <a href="/" className="brand-logo">React + TypScript</a>
            <ul className="right hide-on-med-and-down">
                <li><NavLink to="/">Dela</NavLink></li>
                <li><NavLink to="/about">Informathion</NavLink></li>
                <li><NavLink to="/histtask">History</NavLink></li>
            </ul>
          </div>
    </nav>
)