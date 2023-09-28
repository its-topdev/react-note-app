import React, { useState, useEffect } from "react";
import NotesList from "./components/Notes_list";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";
const App = () => {
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [text_update, settextUpdate] = React.useState("");
  let savedNotes;
  const getNotes = () => {
    const date = new Date();
    let initialNotes = [
      {
        id: nanoid(),
        text: "Your first note.",
        date: date.toLocaleDateString(),
      },
    ];
    savedNotes = JSON.parse(localStorage.getItem("react-notes-data"));
    // console.log(savedNotes);
    if (savedNotes) {
      return savedNotes;
    } else {
      return initialNotes;
    }
  };

  const [notes, setNotes] = React.useState(getNotes());

  useEffect(() => {
    localStorage.setItem("react-notes-data", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    console.log(darkMode, "DarkMode Changed");
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    let theme = localStorage.getItem("darkMode");
    console.log(theme, "This is theme");
    setDarkMode(theme);
  }, []);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const editNote = (text_recieved, id) => {
    // console.log(id);
    //   const found =    savedNotes.find((elem) =>  elem.id === id)
    //   console.log(found);
    console.log(text_recieved);
    settextUpdate(text_recieved);

    deleteNote(id);
  };

  return (
    <div className={`${darkMode && "dark-mode"}  `}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <h3 className="">Press Shift + Enter key to Save Note!</h3>
        <NotesList
          notes={notes.filter((note) =>
            note.text.toUpperCase().includes(searchText.toUpperCase())
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          editNote={editNote}
          text_update={text_update}
        />
      </div>
    </div>
  );
};

export default App;
