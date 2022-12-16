import { configureStore } from "@reduxjs/toolkit";
import NotesSlice from "./slices/NotesSlice";

export const Store = configureStore({
    reducer:{
        NotesReducer:NotesSlice,
    },
})