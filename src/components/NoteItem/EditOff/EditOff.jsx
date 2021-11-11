import React from 'react';
import s from './EditOff.module.css';
import Buttons from "../Buttons/Buttons";

const EditOff = (props) => {
    return (
        <div className={`${s.note__item} ${s.color3}`} id={props.id}>
            <Buttons onToggleEditMode={props.onToggleEditMode}
                     onDeleteNote={props.onDeleteNote}/>
            <h3
                className={`${s.inactive__note__title} ${s.color3}`}
                onClick={props.onToggleEditMode}>
                {props.title}
            </h3>
            <p
                className={`${s.inactive__note__text} ${s.color4}`}
                onClick={props.onToggleEditMode}>
                {props.text}
            </p>
        </div>
    )
}

export default EditOff;