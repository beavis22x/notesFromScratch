const UPDATE_TEXT = 'UPDATE_TEXT';
const UPDATE_TITLE = 'UPDATE_TITLE';
const ADD_NEW_NOTE = 'ADD_NEW_NOTE';
const UPDATE_NEW_NOTE_TEXT = 'UPDATE_NEW_NOTE_TEXT';
const DELETE_NEW_NOTE = 'DELETE_NEW_NOTE';

let initialState = {
    id: 4,
    notes: [
        {id: 1, title: 'asd', text: 'dsa'},
        {id: 2, title: 'dada', text: 'as'},
        {id: 3, title: 'nene', text: 'ass'},
    ],
    updateFormFields: {
        text: 'Hi',
        title: 'Note name',
    }
};

const itemReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_NOTE_TEXT: {
            return {
                ...state,
                updateFormFields: {...state.updateFormFields,}
            };
        }
        case ADD_NEW_NOTE: {
            let newNote = {
                id: state.notes.length + 1,
                title: state.updateFormFields.title,
                text: state.updateFormFields.text
            }
            return {
                ...state,
                notes: [...state.notes, newNote]
            };
        }
        case DELETE_NEW_NOTE: {
            const index = state.notes.findIndex(elem => elem.id === action.noteId);
            return {
                ...state,
                notes: [...state.notes.slice(0, index), ...state.notes.slice(index + 1)]
            };
        }
        case UPDATE_TITLE: {
            return {
                ...state,
                updateFormFields: {...state.updateFormFields, title: action.title}
            };
        }
        case UPDATE_TEXT: {
            return {
                ...state,
                updateFormFields: {...state.updateFormFields, text: action.text}
            };
        }
        default:
            return state;
    }
}



export const updateTextAC = (noteBody) => ({type: UPDATE_TEXT, text: noteBody})   // ACTIONCREATORS
export const updateTitleAC = (title) => ({type: UPDATE_TITLE, title: title})
export const updateNewNoteTextAC = (text, title) => ({type: UPDATE_NEW_NOTE_TEXT, text: text, title: title})
export const addNewNoteAC = () => ({type: ADD_NEW_NOTE})
export const deleteNoteAC = (noteId) => ({type: DELETE_NEW_NOTE, noteId})


export default itemReducer;
