import React from 'react';
import {connect} from "react-redux";
import NotesList from "../NotesList/NotesList";
import {
    deleteNoteAC, setNotesAC,
    updateEditNoteTextAC,
    updateEditNoteTitleAC
} from "../../redux/itemReducer";


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
        },
        setNotes: (title, text, id) => {
            dispatch(setNotesAC(title, text, id))
        }
    }
}

const NotesListContainer = connect (mapStateToProps, mapDispatchToProps) (NotesList);

export default NotesListContainer;