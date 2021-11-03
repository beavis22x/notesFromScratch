import React, {Component} from "react";
import './AddNote.css'
import {updateTitleAC} from "../../redux/itemReducer";
import * as axios from "axios";


const AddNote = (props) => {

    let idApi = 101;

    // handleTitleChange = (e) => {
    //     let title = e.target.value;
    //     this.setState({title})
    // }

    // handleNoteBodyChange = (e) => {
    //     let noteBody = e.target.value;
    //     this.setState({noteBody})
    // }
    //
    const handleTitleChange = (e) => {
        let title = e.target.value;
        return props.updateTitleNewNote(title);   //ЭТО ЗАТРАВКА ДЛЯ СТОРА РИДАКСА
    }

    const handleNoteBodyChange = (e) => {
        let noteBody = e.target.value;
        props.updateTextNewNote(noteBody);
    }


    const addNewNote = (e) => {
        e.preventDefault();
        if (props.updateFormFields.text || props.updateFormFields.title) { // если в одном из полей ввода что-то написано то добавляем в стор
            props.addNewNote()
            axios.post(`https://jsonplaceholder.typicode.com/posts/`, {
                "id": idApi,
                "title": props.updateFormFields.title,
                "body":props.updateFormFields.text
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        ++idApi;
    }


    // onInputChange = (e) => {  // Catch onChange from input and textarea
    //     e.preventDefault();
    //     const {target: { name, value }} = e;
    //     this.setState({[name]: value,});
    // };

    // addNote = () => {
    //     props.addNote(text, title)
    // }


    return (
        <form className="note-form">
            <div className="inputs-holder">
                <div className="form-group">
                    <input
                        className="form-control app-input"
                        id="title"
                        name="title"
                        placeholder="The post title"
                        onChange={handleTitleChange}
                        value={props.updateFormFields.title}
                    />
                </div>
                <textarea
                    className="form-control app-input"
                    id="note-text"
                    rows="3"
                    placeholder="Create a note"
                    name="text"
                    onChange={handleNoteBodyChange}
                    value={props.updateFormFields.text}
                />
            </div>
            <div>
                <div>
                    <button
                        className="submit-button"
                        id="stepper"
                        type="submit"
                        onClick={addNewNote}>
                        <span>Submit</span>
                    </button>
                </div>
            </div>
        </form>
    )
}


export default AddNote;