import React from 'react';
import NoteItem from "../NoteItem/NoteItem";



const NotesList = (props) => {

    const listItemCount = props.notes.map((n) => {
        // const {id} = n;
        return <NoteItem key={n.id}
                         title={n.title}
                         text={n.text}
                         id={n.id}
                         editMode={n.editMode}
                         editModeOn={props.editModeOn}
                         editModeOff={props.editModeOff}
                         updateEditNoteTitle={props.updateEditNoteTitle}
                         updateEditNoteText={props.updateEditNoteText}
                         onDeleteNote={() => props.deleteNote(n.id)}/>
    });

    return (
        <main className="main">
            <section className="note__items">
                {listItemCount}
            </section>
        </main>
    )
}

export default NotesList