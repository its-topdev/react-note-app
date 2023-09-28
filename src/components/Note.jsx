import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
const Note = ({ id, text, date, handleDeleteNote, editNote }) => {
  const deleteNote = (id) => {
    handleDeleteNote(id);
  };

  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <div>
          <AiFillEdit
            className="delete-icon"
            size="1.3em"
            onClick={() => {if (window.confirm("Do you want to Edit note?")) editNote(text, id)}}
          />{" "}
          <MdDeleteForever
            className="delete-icon"
            size="1.3em"
            onClick={() => {
              if (window.confirm("Do you want to delete note?")){ deleteNote(id);}
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
