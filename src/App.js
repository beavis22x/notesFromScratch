import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotesList from "./components/NotesList/NotesList";
import React from "react";
import AddNote from "./components/AddNote/AddNote";
import AddNoteWithHook from "./components/AddNote/AddNoteWithHook";
import {addNote} from "./redux/itemReducer"

addNote('darov', 'durachok')

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className="app-wrapper-content">
                <AddNote />
                <NotesList/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
