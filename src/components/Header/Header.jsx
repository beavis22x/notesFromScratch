import React from 'react';
import NavBar from "./NavBar";
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://clck.ru/XzD4Y" className={s.header__logo}></img>
            <NavBar/>
        </header>
    )}

export default Header