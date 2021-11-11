import React from 'react';
import s from './EditOn.module.css';
import Buttons from "../Buttons/Buttons";

const EditOn = (props) => {
    return (
        <div className={s.form__group__edit}>
            <Buttons onToggleEditMode={props.onToggleEditMode}
                     onDeleteNote={props.onDeleteNote}/>
            <div>
                <input
                    type="text"
                    placeholder="note title"
                    value={props.title}
                    id={props.id}
                    onChange={props.titleUpdate}
                    onKeyPress={props.handleKeyPress}
                    autoFocus={true}
                >
                </input>
            </div>
            <textarea
                placeholder="print your note"
                value={props.text}
                id={props.id}
                onKeyPress={props.handleKeyPress}
                onChange={props.textUpdate}
                onBlur={props.onToggleEditMode}>
            </textarea>
        </div>
    )
}

export default EditOn;