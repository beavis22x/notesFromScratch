import React, {Component} from "react";
import './AddNote.css'


class AddNote extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            text: '',
        }
    }


    // handleTitleChange = (e) => {
    //     let title = e.target.value;
    //     this.setState({title})
    // }
    //
    // handleNoteBodyChange = (e) => {
    //     let noteBody = e.target.value;
    //     this.setState({noteBody})
    // }

    onInputChange = (e) => {  // Catch onChange from input and textarea
        e.preventDefault();
        const {target: { name, value }} = e;
        this.setState({[name]: value,});
    };

    // addNote = () => {
    //     props.addNote(text, title)
    // }

    render() {
        return (
        <form className="note-form">
            <div className="inputs-holder">
                <div className="form-group">
                    <input
                        className="form-control app-input"
                        id="title"
                        name="title"
                        placeholder="The post title"
                        onChange={this.onInputChange}
                    />
                </div>
                <textarea
                    className="form-control app-input"
                    id="note-text"
                    rows="3"
                    placeholder="Create a note"
                    name="text"
                    onChange={this.onInputChange}
                />
            </div>
            <div>
                <div>
                    <button
                        className="prev-button"
                        id="prev"
                        type="button">
                        Prev
                    </button>
                    <button className="submit-button" id="stepper" type="submit">
                        <span>Submit</span>
                    </button>
                </div>
            </div>
        </form>
        )
    }
}


export default AddNote