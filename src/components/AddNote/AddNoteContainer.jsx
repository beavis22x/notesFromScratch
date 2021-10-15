import React from "react";
import AddNote from "./AddNote";
import {connect} from "react-redux";
import  {addNewNoteAC, updateNewTextAC, updateNewTitleAC} from "../../redux/itemReducer";


let mapStateToProps = (state) => {
    return {
        updateFormFields: state.itemReducer.updateFormFields
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateTitleNewNote: (title) => {
            dispatch(updateNewTitleAC(title))
        },
        updateTextNewNote: (noteBody) => {
            dispatch(updateNewTextAC(noteBody));
        },
        addNewNote: () => {
            dispatch(addNewNoteAC());
        },
    }
}

const AddNoteContainer = connect(mapStateToProps, mapDispatchToProps) (AddNote);


export default AddNoteContainer