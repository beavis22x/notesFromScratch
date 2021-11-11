import React from 'react';
import NoteItem from "../NoteItem/NoteItem";
import s from './NoteList.module.css';

const NotesList = (props) => {

    const listItems = props.notes.map((n) => {
        // const {id} = n;
        return <NoteItem {...n}
                         notes={props.notes}
                         setNotes={props.setNotes}
                         updateEditNoteTitle={props.updateEditNoteTitle}
                         updateEditNoteText={props.updateEditNoteText}
                         onDeleteNote={() => props.onDeleteNote(n.id)}/>
    });

    return (
        <main className={s.main}>
            <section className={s.note__items}>
                {listItems}
            </section>
        </main>
    )
}

export default NotesList