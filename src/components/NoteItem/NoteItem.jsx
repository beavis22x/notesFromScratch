import React, {useState, useEffect} from 'react';
import * as axios from "axios";
import s from './NoteItem.module.css';
import EditOn from "./EditOn/EditOn";
import EditOff from "./EditOff/EditOff";

const NoteItem = (props) => {

    const [editMode, setEditMode] = useState(false);

    const onToggleEditMode = (e) => {
        setEditMode(!editMode);
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
                .then(response => props.setNotes(response.data.type, response.data.activity, response.data.key));
    }, [props.notes.length]);

    return (
        <div className={`${s.note__item__wrapper} ${s.color1}`} id={props.id}>
            {editMode ? <EditOn id={props.id}
                                title={props.title}
                                text={props.text}
                                titleUpdate={titleUpdate}
                                handleKeyPress={handleKeyPress}
                                textUpdate={textUpdate}
                                onToggleEditMode={onToggleEditMode}
                                onDeleteNote={props.onDeleteNote}/>
                :
                <EditOff id={props.id}
                         title={props.title}
                         text={props.text}
                         onToggleEditMode={onToggleEditMode}
                         onDeleteNote={props.onDeleteNote}/>
            }
        </div>
    )
}

export default NoteItem