import React from 'react';


const Header = (props) => {
    return (
        <header className="header">
            <img src="https://clck.ru/XzD4Y" className="header__logo"></img>
            <nav className="nav__header">
                <div className="header__link">
                    5 notes
                </div>
                <div className="header__link">
                    10 notes
                </div>
                <div className="header__link">
                    15 notes
                </div>
            </nav>
            <div className="header__burger">
                <span></span>
            </div>
        </header>
    )}


export default Header