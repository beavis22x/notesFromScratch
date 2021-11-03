import React, {useState, useEffect} from 'react';
import Trash from "react-feather/dist/icons/trash";
import Edit from "react-feather/dist/icons/edit-2";
import * as axios from "axios";


const NoteItem = (props) => {

    const [editMode, setEditMode] = useState(false);

    const onToggleEditMode = () => {
        setEditMode(!editMode)
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

    useEffect(() => {  // Если меньше 3 в массиве notes запускает сарзу 2 запроса
        if (props.notes.length < 3)
            axios.get('https://www.boredapi.com/api/activity/')
                .then(response => props.setNotes(response.data.type, response.data.activity, response.data.key)); // ));
    }, [props.notes.length]);


    return (
        <div className="note-item color1" id={props.id}>
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
                        value={props.title}>
                    </input>
                    </div>
                    <textarea placeholder="print your note"
                              value={props.text}
                              id={props.id}
                              onChange={textUpdate}>
                            </textarea>
                </div>
            ) : (
                <div className="color3" id={props.id}>
                    <h3 className="inactive-note-title color3">{props.title}</h3>
                    <div className='inactive-note-text'>
                        <p className="inactive-note-text color4">{props.text}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default NoteItem