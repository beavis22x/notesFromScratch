import React, {useState} from "react";
import './AddNote.module.css'


const AddNoteWithHook = (props) => {
    const [note, setNote] = useState({
        title: '',
        text: '',
    });


    const onInputChange = (e) => {
    // Catch onChange from input and textarea
    const {target: {name, value}} = e;
    setNote({...note, name: value,});
        console.log(e)
    }

    // onInputChange = (e) => {
    //     e.preventDefault();
    //     const {target: {name, value}} = e;
    //     this.setState({[name]: value,});
    // };

    return (
        <form className="note-form">
            <div className="inputs-holder">
                <div className="form-group">
                    <input
                        className="form-control app-input"
                        id="title"
                        name="title"
                        placeholder="The post title"
                        onChange={onInputChange}
                    />
                </div>
                <textarea
                    className="form-control app-input"
                    id="note-text"
                    rows="3"
                    placeholder="Create a note"
                    name="text"
                    onChange={onInputChange}
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
    );
}


export default AddNoteWithHook