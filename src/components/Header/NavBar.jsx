import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './NavBar.module.css';

const NavBar = (props) => { //activeClassName не робит(
    return (
        <div>
            <nav className={s.nav__header}>
                <div className={s.header__link}>
                    <NavLink to='/notes' activeClassName={s.active}>Home</NavLink>
                </div>
                <div className={s.header__link}>
                    <NavLink to='/notes/5' activeClassName={s.active}>5 notes</NavLink>
                </div>
                <div className={s.header__link}>
                    <NavLink to='/notes/10' activeClassName={s.active}>10 notes</NavLink>
                </div>
            </nav>
            <div className="header__burger">
                <span></span>
            </div>
        </div>
    )
}

export default NavBar;