import React from 'react';
import s from './Footer.module.css'

const Footer = (props) => {
    return (
        <footer className={s.footer}>
            <div className={s.footer__content}>Copy, 2021</div>
        </footer>
    )
}

export default Footer