import React from 'react';
import Trash from "react-feather/dist/icons/trash";
import Edit from "react-feather/dist/icons/edit-2";
import s from './Buttons.module.css';

const Buttons = (props) => {

    return (
        <div className={s.btn__holder}>
            <button
                className={s.btn__item}
                id={props.id}
                name='delete'
                onClick={props.onDeleteNote}>
                <Trash size={20}/>
            </button>
            <button
                className={s.btn__item}
                name='edit'
                id={props.id}
                onClick={props.onToggleEditMode}>
                <Edit size={20}/>
            </button>
        </div>
    )
}

export default Buttons;
