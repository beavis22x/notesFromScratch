import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import React from "react";
import AddNoteContainer from "./components/AddNote/AddNoteContainer";
import NotesListContainer from "./components/NoteItem/NoteListContainer";
import {Route, Routes} from "react-router-dom";


function App(props) {
    return (
        <div className="app__wrapper">
            <Header/>
            <div className="app__wrapper__content">
                <AddNoteContainer store={props.store}/>
                <Routes>
                    <Route path='/notes' element={
                        <NotesListContainer/>
                    }>
                    </Route>
                    <Route path='/notes/5' element={
                        <NotesListContainer/>
                    }>
                    </Route>
                    <Route path='/notes/10' element={
                        <NotesListContainer/>
                    }>
                    </Route>
                    <Route path='/notes/15' element={
                        <NotesListContainer/>
                    }>
                    </Route>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
