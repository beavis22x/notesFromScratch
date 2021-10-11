import React from 'react';
import Trash from "react-feather/dist/icons/trash";
import Edit from "react-feather/dist/icons/edit-2";


const NoteItem = (props) => {
    return (
        <div className="props.color.note__item color3">
            <input
                type="text"
                placeholder="note title"
                >
            </input>
            <button
                id="note-button"
                name='delete'>
                <Trash size={20}/>
            </button>
            <button
                name='edit'
                id="note-button">
                <Edit size={20}/>
            </button>
            <p>
                <textarea placeholder="print your note" ></textarea>
            </p>
        </div>
    )
}

export default NoteItem