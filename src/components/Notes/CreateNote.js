import { nanoid } from "@reduxjs/toolkit";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../../slices/NotesSlice";
import "./NoteStyle.css";

function CreateNote() {
  const titleRef = useRef(null);
  const descRef = useRef(null);

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    const title = titleRef.current.value;
    const desc = descRef.current.value;
    const id = nanoid(2);

    const newNote = {
      noteId: id,
      noteTitle: title,
      noteDesc: desc,
    };
    dispatch(createNote(newNote));
  }

  return (
    <div className="create-note-container">
      <form onSubmit={handleSubmit} className="form-container">
        <input placeholder="Enter Title" type="text" ref={titleRef} />
        <input placeholder="Enter Description " type="text" ref={descRef} />
        <input onClick={handleSubmit} type="submit" value={"ADD NOTE"} />
      </form>
    </div>
  );
}

export default CreateNote;
