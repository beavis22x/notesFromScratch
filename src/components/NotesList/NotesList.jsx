import React from 'react';
import NoteItem from "../NoteItem/NoteItem";

const NotesList = (props) => {
    const listItem = [0, 1, 2];
    const listItemCount = listItem.map((note) => <NoteItem/>)

    return (
        <main className="main">
            <section className="note__items">
                {listItemCount}
            </section>
        </main>
    )
}

export default NotesList