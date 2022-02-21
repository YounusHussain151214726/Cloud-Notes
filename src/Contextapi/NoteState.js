import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:1122";
  const notes = [];
  const [Note, setNotes] = useState(notes);

  //Get notes
  const getnotes = async () => {
    const responce = await fetch(`${host}/notes/fetchnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token')
      },
    });
    const json = await responce.json();
    setNotes(json);
  };

  //Add notes

  console.log("Adding notes in noteState");
  const Addnote = async (title, description, tag) => {
    const response = await fetch(`${host}/notes/Addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    setNotes(Note.concat(note));
  };

  //Delete Note
  const Deletenote = async (id) => {
    const responce = await fetch(`${host}/notes/deletenotes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token')
      },
    });
    const json = await responce.json();
    const newnote = Note.filter((note) => note._id !== id);
    setNotes(newnote);
  };

  //Update Note
  const Updatenote = async (id, title, description, tag) => {
    const responce = await fetch(`${host}/notes/updatenotes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await responce.json();
    console.log("json", json);

    let newnotes = JSON.parse(JSON.stringify(Note));
    for (let index = 0; index < newnotes.length; index++) {
      const element = newnotes[index];
      if (element._id === id) {
        newnotes[index].title = title;
        newnotes[index].description = description;
        newnotes[index].tag = tag;
        break;
      }
    }
    setNotes(newnotes);
  };

  return (
    <NoteContext.Provider
      value={{ Note, Addnote, Deletenote, Updatenote, getnotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
