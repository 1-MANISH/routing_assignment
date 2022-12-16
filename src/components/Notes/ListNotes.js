import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote, updateNote } from "../../slices/NotesSlice";
import "./NoteStyle.css";

function ListNotes() {
  const [changeNote, setChangeNote] = useState({});

  const titleRef = useRef(null);
  const descRef = useRef(null);

  function handleSubmit(note) {
    const newTitle = titleRef.current.value;
    const newDesc = descRef.current.value;

    console.log(note);
    dispatch(updateNote(note));
  }

  function updateNotes(note) {}

  const notes = useSelector((state) => state.NotesReducer.notes);

  const dispatch = useDispatch();

  return (
    <div className="note-main-container">
      <h1>Your Notes Are here</h1>
      <div className="note-container">
        {notes.map((note, index) => {
          return (
            <div key={index} className="note">
              <h2> ID : {note.noteId}</h2>
              <h4>TITLE : {note.noteTitle}</h4>
              <p>DESCRIPTION : {note.noteDesc}</p>
              <div className="btn">
                <button
                  onClick={(e) => {
                    dispatch(deleteNote(note.noteId));
                  }}
                >
                  {" "}
                  Delete
                </button>
                <button
                  onClick={(e) => {
                    document.getElementById("edit").classList.toggle("resp");
                    setChangeNote(note);
                  }}
                >
                  {" "}
                  Edit
                </button>
              </div>
            </div>
          );
        })}
        <div id="edit" className="edit">
          <form>
            <input type="text" ref={titleRef} placeholder="Edit Title" />

            <input type="text" ref={descRef} placeholder="Edit Description" />

            <button
              onClick={(e) => {
                e.preventDefault();

                const newNote = {
                  noteId: changeNote.noteId,
                  noteTitle: titleRef.current.value,
                  noteDesc: descRef.current.value,
                };
                console.log(newNote);
                dispatch(updateNote(newNote));
                document.getElementById("edit").classList.toggle("resp");
              }}
            >
              {" "}
              EDIT NOW
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ListNotes;
