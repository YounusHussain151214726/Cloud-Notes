import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import noteContext from "../Contextapi/noteContext";
import { MdTitle, MdOutlineDescription } from "react-icons/md";
import { AiTwotoneTag , AiFillInfoCircle} from "react-icons/ai";


const Addnotes = (props) => {
  const context = useContext(noteContext);
  const { Addnote } = context;
  const { showAlert } = props;
  const [note, setnote] = useState({ title: "", description: "", tag: "" });

  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };

  const handleclick = (e) => {
    e.preventDefault();
    Addnote(note.title, note.description, note.tag);
    showAlert("Note Added Successfully", "success");
  };

  return (
    <div className="container " id="LoC">
      <Form className="col-5">
        <Form.Group className="mb" controlId="formBasicEmail">
          <MdTitle
            style={{
              position: "relative",
              color: "blue",
              right: "1.8pc",
              top: "2pc",
              fontSize: "1.5pc",
            }}
          />

          <Form.Control
            type="text"
            name="title"
            placeholder="Your Note Title"
            onChange={onChange}
            className="titlecss"
          />
        </Form.Group>

        <Form.Group className="mb" controlId="formBasicPassword">
          <MdOutlineDescription
            style={{
              position: "relative",
              color: "blue",
              right: "1.8pc",
              top: "3.1pc",
              fontSize: "1.5pc",
            }}
          />

          <Form.Control
            type="text"
            name="description"
            placeholder=" Your Note Description"
            onChange={onChange}
            className="descss"
          />
          
        </Form.Group>
     
        <Form.Group className="mb-1" controlId="formBasicPassword">
          <AiTwotoneTag
            style={{
              position: "relative",
              color: "blue",
              right: "1.8pc",
              top: "2pc",
              fontSize: "1.5pc",
            }}
          />

          <Form.Control
            type="text"
            name="tag"
            placeholder="Your Note Tag"
            onChange={onChange}
            className="tagcss"
          />
        </Form.Group>
        <Button
          variant="success"
          className="AddB"
          type="submit"
          onClick={handleclick}
        >
          Add +
        </Button>
        <br />
        <Form.Text className="text-muted">
          We'll never share your notes with anyone else.
        </Form.Text>
      </Form>
    </div>
  );
};

export default Addnotes;
