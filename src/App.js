import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotesList from "./components/NotesList/NotesList";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className="app-wrapper-content">
                <NotesList/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
