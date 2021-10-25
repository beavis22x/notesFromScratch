import React from 'react';
import {connect} from "react-redux";
import NotesList from "../NotesList/NotesList";
import {
    deleteNoteAC,
    updateEditNoteTextAC,
    updateEditNoteTitleAC
} from "../../redux/itemReducer";

// const NotesList = (props) => {
//     const listItem = [0, 1, 2];
//     const listItemCount = listItem.map((note) => <NoteItem/>)
//
//     return (
//         <main className="main">
//             <section className="note__items">
//                 {listItemCount}
//             </section>
//         </main>
//     )
// }


let mapStateToProps = (state) => {
    return {
        notes: state.itemReducer.notes, // В стэйт какого-то хера приходит itemReducer
        editMode: state.itemReducer.notes.editMode
    }
}
//
let mapDispatchToProps = (dispatch) => {
    return {
        deleteNote: (noteId) => {
            dispatch(deleteNoteAC(noteId))
        },
        updateEditNoteTitle: (noteId, title) => {
            dispatch(updateEditNoteTitleAC(noteId, title))
        },
        updateEditNoteText: (noteId, text) => {
            dispatch(updateEditNoteTextAC(noteId, text))
        }
    }
}

const NotesListContainer = connect (mapStateToProps, mapDispatchToProps) (NotesList);

export default NotesListContainer;