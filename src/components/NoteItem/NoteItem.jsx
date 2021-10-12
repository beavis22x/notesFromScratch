import React from 'react';
import Trash from "react-feather/dist/icons/trash";
import Edit from "react-feather/dist/icons/edit-2";


const NoteItem = (props) => {

    // const onDeleteNote = (e) => {
    //     let noteId = e.target.id;
    //     return props.deleteNote(noteId);
    // }

    return (
        <div className="props.color.note__item color3" id={props.id}>
            <input
                type="text"
                placeholder="note title"
                value={props.title}
            >
            </input>
            <button
                id="note-button"
                name='delete'
                onClick={props.onDeleteNote}>
                <Trash size={20}/>
            </button>
            <button
                name='edit'
                id="note-button">
                <Edit size={20}/>
            </button>
            <p>
                <textarea placeholder="print your note"
                          value={props.text}>
                </textarea>
            </p>
        </div>
    )
}

export default NoteItem