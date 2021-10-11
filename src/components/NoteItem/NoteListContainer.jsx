import React from 'react';
import {connect} from "react-redux";
import NotesList from "../NotesList/NotesList";

const NotesListContainer = (props) => {
    const listItem = [0, 1, 2];
    const listItemCount = listItem.map((note) => <NoteItem/>)

    return (
        <main className="main">
            <section className="note__items">
                {listItemCount}
            </section>
        </main>
    )
}


let mapStateToProps = (state) => {
    return {
        notes: state.notes,
        title: state.notes.title,
        text: state.notes.text
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNote.dispatch
    }
}

connect (mapStateToProps, mapDispatchToProps) (NotesList);

export default NotesListContainer