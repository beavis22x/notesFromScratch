import React, {Component} from "react";
import AddNote from "./AddNote";
import {connect} from "react-redux";
import {addNewNoteAC, updateTextAC, updateTitleAC} from "../../redux/itemReducer";


let mapStateToProps = (state) => {
    return {
        notes: state.itemReducer.notes, // В стэйт какого-то хера приходит itemReducer
        updateFormFields: state.itemReducer.updateFormFields

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateTitleNewNote: (title) => {
            dispatch(updateTitleAC(title))
        },
        updateTextNewNote: (noteBody) => {
            dispatch(updateTextAC(noteBody));
        },
        addNewNote: () => {
            dispatch(addNewNoteAC());
        },
    }
}

const AddNoteContainer = connect(mapStateToProps, mapDispatchToProps) (AddNote);


export default AddNoteContainer