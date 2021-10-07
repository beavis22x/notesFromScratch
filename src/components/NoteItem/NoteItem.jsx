import React from 'react';

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
                delete
            </button>
            <button
                name='edit'
                id="note-button">
                edit
            </button>
            <p>
                <textarea placeholder="print your note" ></textarea>
            </p>
        </div>
    )
}

export default NoteItem