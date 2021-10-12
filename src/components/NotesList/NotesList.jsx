import React from 'react';
import NoteItem from "../NoteItem/NoteItem";


// let length = props.notes.length;
//
// const titleArr = props.notes.map(n => {
//     let arr = [];
//
//     for (let i = 0; i < length; i++) {
//         let titleNote = n.title;
//         arr.push(titleNote)
//     }
//     return console.log(arr);
// });


const NotesList = (props) => {

    const listItemCount = props.notes.map((n) => {
        // const {id} = n;
        return <NoteItem key={n.id}
                         title={n.title}
                         text={n.text}
                         id={n.id}
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