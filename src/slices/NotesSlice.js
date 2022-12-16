import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notesSlice",
  initialState: {
    notes: [],
  },
  reducers: {
    createNote: (state, action) => {
      state.notes.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note, index) => {
        return note.noteId !== action.payload;
      });
    },
    updateNote: (state, action) => {
      state.notes = state.notes.map((note, index) => {
        if (note.noteId === action.payload.noteId) {
          return action.payload;
        } else {
          return note;
        }
      });
    },
  },
});

export default notesSlice.reducer;

export const { createNote, deleteNote, updateNote } = notesSlice.actions;
