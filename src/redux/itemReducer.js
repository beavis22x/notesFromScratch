let UPDATE_TEXT = '';
let UPDATE_TITLE = '';

let initialState = {
    notes: [
        {id:1, title: '', text: ''},
        {id:2, title: '', text: ''},
        {id:3, title: '', text: ''}
    ]
}

// const itemReducer (state = initialState, action) => {
//
//     switch (action.type) {
//         case
//     }
// }

export const addNote = (text, title) => {
    let newNote = {
        id: initialState.notes.lenght + 1,
        title,
        text,
    };
    initialState.notes.push(newNote);
};