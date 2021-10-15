import React from 'react';
import Trash from "react-feather/dist/icons/trash";
import Edit from "react-feather/dist/icons/edit-2";


const NoteItem = (props) => {
    const {editMode} = props;
    
    const onToggleEditMode = (e) => {
        const id = Number(e.currentTarget.id);
        if (editMode) {
            props.editModeOff(id);
        } else {
            props.editModeOn(id);
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



    return (
        <div className="props.color.note__item color3" id={props.id}>
            <div>
                <button
                    className='NoteItemBtn'
                    id={props.id}
                    name='delete'
                    onClick={props.onDeleteNote}>
                    <Trash size={20}/>
                </button>
                <button
                    className='NoteItemBtn'
                    name='edit'
                    id={props.id}
                    onClick={onToggleEditMode}>
                    <Edit size={20}/>
                </button>
            </div>
            {editMode ? (
                    <div>
                        <input
                            type="text"
                            placeholder="note title"
                            id={props.id}
                            onChange={titleUpdate}
                            value={props.title}>
                        </input>
                        <div>
                            <textarea placeholder="print your note"
                                      value={props.text}
                                      id={props.id}
                                      onChange={textUpdate}>
                            </textarea>
                        </div>

                    </div>)
                : (
                    <div className="color2" id={props.id}>
                        <span className="inactiveNoteTitle color2">{props.title}</span>
                        <div>
                            <p className="inactiveNoteText color1">{props.text}</p>
                        </div>
                    </div>
                )}
        </div>
    )

}

export default NoteItem