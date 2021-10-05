import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src="https://clck.ru/XzD4Y" className="header__logo"></img>
                <nav className="nav__header">
                    <div className="header__link">
                        5 notes
                    </div>
                    <div className="header__link">
                        10 notes
                    </div>
                    <div className="header__link">
                        15 notes
                    </div>
                </nav>
                <div className="header__burger">
                    <span></span>
                </div>
            </header>
            <main className="main">
                <section className="note__items">
                    <div className="note__item color3">
                        HHHAAAAAAYYY
                    </div>
                    <div className="note__item color1">
                        HHHAAAAAAYYY
                    </div>
                    <div className="note__item color2">
                        HHHAAAAAAYYY
                    </div>
                    <div className="note__item color3">
                        HHHAAAAAAYYY
                    </div>
                    <div className="note__item color4">
                        HHHAAAAAAYYY
                    </div>
                    <div className="note__item color2">
                        HHHAAAAAAYYY
                    </div>
                </section>
            </main>
            <footer className="footer">
                <div>Copy, 2021</div>
            </footer>
        </div>
    );
}

export default App;
