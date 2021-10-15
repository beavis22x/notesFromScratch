const UPDATE_NEW_NOTE_TEXT = 'UPDATE_NEW_NOTE_TEXT';
const UPDATE_NEW_NOTE_TITLE = 'UPDATE_NEW_NOTE_TITLE';
const ADD_NEW_NOTE = 'ADD_NEW_NOTE';
const DELETE_NOTE = 'DELETE_NOTE';
const EDIT_NOTE_ON = 'EDIT_NOTE_ON';
const EDIT_NOTE_OFF = 'EDIT_NOTE_OFF';
const UPDATE_EDIT_ON_NOTE_TEXT = 'UPDATE_EDIT_ON_NOTE_TEXT';
const UPDATE_EDIT_ON_NOTE_TITLE = 'UPDATE_EDIT_ON_NOTE_TITLE';


let initialState = {
    notes: [
        {id: 1, title: 'asd', text: 'dsa', editMode: false},
        {id: 2, title: 'dada', text: 'as', editMode: false},
        {id: 3, title: 'nene', text: 'ass', editMode: false},
    ],
    updateFormFields: {
        text: 'Hi',
        title: 'Note name',
    },
};

const itemReducer = (state = initialState, action) => {

    switch (action.type) {
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
        case DELETE_NOTE: {
            const index = state.notes.findIndex(elem => elem.id === action.noteId);
            return {
                ...state,
                notes: [...state.notes.slice(0, index), ...state.notes.slice(index + 1)]
            };
        }
        case UPDATE_NEW_NOTE_TITLE: {
            return {
                ...state,
                updateFormFields: {...state.updateFormFields, title: action.title}
            };
        }
        case UPDATE_NEW_NOTE_TEXT: {
            return {
                ...state,
                updateFormFields: {...state.updateFormFields, text: action.text}
            };
        }
        case EDIT_NOTE_ON: {
            return {
                ...state,
                notes: state.notes.map ((n) => {  // Проходим по массиву объектов если айди объекта
                    if (n.id === action.noteId) {     // и айди из экшена совпадают делаем его копию и переключаем
                        return {...n, editMode: true} // едитмод, иначе возвращаем старый объект
                    }
                    return n;
                }),
            };
        }
        case EDIT_NOTE_OFF: {
            return {
                ...state,
                notes: state.notes.map ((n) => {
                    if (n.id === action.noteId) {
                        return {...n, editMode: false}
                    }
                    return n;
                }),
            };
        }
        case UPDATE_EDIT_ON_NOTE_TITLE: {
            return {
                ...state,
                notes: state.notes.map ((n) => {  // Проходим по массиву объектов если айди объекта
                    if (n.id === action.noteId) {
                        console.log('!')// и айди из экшена совпадают делаем его копию и меняем
                        return {...n, title: action.title} // тайтл, иначе возвращаем старый объект
                    }
                    return n;
                }),
            };
        }
        case UPDATE_EDIT_ON_NOTE_TEXT: {
            return {
                ...state,
                notes: state.notes.map ((n) => {  // Проходим по массиву объектов если айди объекта
                    if (n.id === action.noteId) {     // и айди из экшена совпадают делаем его копию и меняем
                        return {...n, text: action.text} // тайтл, иначе возвращаем старый объект
                    }
                    return n;
                }),
            };
        }
        default:
            return state;
    }
}



export const updateNewTextAC = (noteBody) => ({type: UPDATE_NEW_NOTE_TEXT, text: noteBody})   // ACTIONCREATORS
export const updateNewTitleAC = (title) => ({type: UPDATE_NEW_NOTE_TITLE, title: title})
export const addNewNoteAC = () => ({type: ADD_NEW_NOTE})
export const deleteNoteAC = (noteId) => ({type: DELETE_NOTE, noteId})
export const editModeOnAC = (noteId) => ({type: EDIT_NOTE_ON, noteId})
export const editModeOffAC = (noteId) => ({type: EDIT_NOTE_OFF, noteId})
export const updateEditNoteTitleAC = (noteId, title) => ({type: UPDATE_EDIT_ON_NOTE_TITLE, noteId, title})
export const updateEditNoteTextAC = (noteId, text) => ({type: UPDATE_EDIT_ON_NOTE_TEXT, noteId, text})


export default itemReducer;
