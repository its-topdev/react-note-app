import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";

const Notes_list = ({ notes, handleAddNote, handleDeleteNote ,editNote,text_update}) => {
  return (
    <div className="notes-list">
      <AddNote handleAddNote={handleAddNote} text_update={text_update} handleDeleteNote={handleDeleteNote} />
      {notes.map((note) => {
        return (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            date={note.date}
            handleDeleteNote={handleDeleteNote}
            editNote ={editNote}
          />
        );
      })}
      
    </div>
  );
};

export default Notes_list;
