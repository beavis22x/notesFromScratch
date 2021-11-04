import React, {useState, useEffect} from 'react';
import Trash from "react-feather/dist/icons/trash";
import Edit from "react-feather/dist/icons/edit-2";
import * as axios from "axios";


const NoteItem = (props) => {

    const [editMode, setEditMode] = useState(false);

    const onToggleEditMode = (e) => {
        setEditMode(!editMode);
        if (editMode) {
            e.currentTarget.onFocus();
            }
        }

    const titleUpdate = (e) => {
        let title = e.target.value,
            id = Number(e.currentTarget.id);
        props.updateEditNoteTitle(id, title);
    }

    const textUpdate = (e) => {
        let text = e.target.value,
            id = Number(e.currentTarget.id);
        props.updateEditNoteText(id, text);
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onToggleEditMode(event);
        }
    }

    useEffect(() => {  // Если меньше 3 в массиве notes запускает сарзу 2 запроса
        if (props.notes.length < 3)
            axios.get('https://www.boredapi.com/api/activity/')
                .then(response => props.setNotes(response.data.type, response.data.activity, response.data.key)); // ));
    }, [props.notes.length]);


    return (
        <div className="note-item-wrapper color1" id={props.id}>
            <div className='btn-holder'>
                <button
                    className='note-item-btn'
                    id={props.id}
                    name='delete'
                    onClick={props.onDeleteNote}>
                    <Trash size={20}/>
                </button>
                <button
                    className='note-item-btn'
                    name='edit'
                    id={props.id}
                    onClick={onToggleEditMode}>
                    <Edit size={20}/>
                </button>
            </div>
            {editMode ? (
                <div className='form-group-edit'>
                    <div>
                        <input
                            type="text"
                            placeholder="note title"
                            id={props.id}
                            onChange={titleUpdate}
                            onKeyPress={handleKeyPress}
                            value={props.title}>
                        </input>
                    </div>
                    <textarea
                        placeholder="print your note"
                        value={props.text}
                        id={props.id}
                        onKeyPress={handleKeyPress}
                        onChange={textUpdate}>
                            </textarea>
                </div>
            ) : (
                <div className="note-item color3" id={props.id}>
                    <h3
                        className="inactive-note-title color3"
                        onClick={onToggleEditMode}>
                        {props.title}
                    </h3>
                    <p
                        className="inactive-note-text color4"
                        onClick={onToggleEditMode}>
                        {props.text}
                    </p>
                </div>
            )}
        </div>
    )
}

export default NoteItem