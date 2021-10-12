import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import React from "react";
import AddNoteContainer from "./components/AddNote/AddNoteContainer";
import NotesListContainer from "./components/NoteItem/NoteListContainer";


function App(props) {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className="app-wrapper-content">
                <AddNoteContainer  store={props.store}/>
                <NotesListContainer/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
