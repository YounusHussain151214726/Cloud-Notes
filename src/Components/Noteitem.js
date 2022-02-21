import React, { useContext , useState } from "react";
import { Card, Badge } from "react-bootstrap";
import { MdDelete, MdEditNote } from "react-icons/md";
import noteContext from "../Contextapi/noteContext";
import Notes from "./Notes";
export const Noteitem = (props) => {
  const { note, update } = props;
  const context = useContext(noteContext);
  const { Deletenote } = context;
  const { showAlert } = props;

  const Delete = (e) => {
    e.preventDefault();
    Deletenote(note._id);
    showAlert("Note Delete Successfully", "success");
  };
  return (
    <>
    <div className="col-md-3">
      <Card className="my-3">
        <Card.Body>
          <Card.Title>{note.title} </Card.Title>
          <Badge
            bg="warning"
            text="dark"
            className="bdg"
          >
            {note.tag}
          </Badge>
          <Card.Text>{note.description}</Card.Text>
          <div  id='deli' style={{ width: "5pc", marginLeft: "6.5pc" }}>
            <MdEditNote
              style={{ fontSize: "1.5pc", color: "green", cursor: "pointer" }}
              onClick={() => {
                update(note);
              }}
            />

            <MdDelete
              className="mx-3"
              style={{ fontSize: "1.3pc", color: "red", cursor: "pointer" }}
              onClick={Delete}
            />
          </div>
        </Card.Body>
      </Card>
    </div>
</>
  );
};
export default Noteitem;
