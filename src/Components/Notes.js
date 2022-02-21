import React, { useContext, useEffect, useRef, useState } from "react";
import "../App.css";
import noteContext from "../Contextapi/noteContext";
import { Button, Modal, Form } from "react-bootstrap";
import Noteitem from "./Noteitem";
import { useNavigate } from "react-router-dom";
import { MdTitle ,MdOutlineDescription} from "react-icons/md";
import { AiTwotoneTag } from "react-icons/ai";

const Notes = (props) => {
  const context = useContext(noteContext);
  const { Note, getnotes, Updatenote } = context;
  const [show, setShow] = useState(false);
  const { showAlert } = props;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [notes, setnote] = useState({
    id: "",
    uptitle: "",
    updescription: "",
    uptag: "",
  });
  const ref = useRef(null);
  const closeref = useRef();
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getnotes();
    } else {
      navigate("/login");
    }
  }, []);

  const update = (note) => {
    ref.current.click();
    console.log(note);
    setnote({
      id: note._id,
      uptitle: note.title,
      updescription: note.description,
      uptag: note.tag,
    });
  };

  const onChange = (e) => {
    setnote({ ...notes, [e.target.name]: e.target.value });
  };

  const handleclick = (e) => {
    Updatenote(notes.id, notes.uptitle, notes.updescription, notes.uptag);
    showAlert("Note Updated", "success");
    closeref.current.click();
  };




  return (
    <>
      <Button
        ref={ref}
        variant="primary"
        className="d-none"
        onClick={handleShow}
      >
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="col-6" id="NotesF">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <MdTitle style={{position:'relative' , color:'blue', right:'1.8pc', top:'2pc' , fontSize:'1.5pc'}} />
              <Form.Control

                type="text"
                name="uptitle"
                value={notes.uptitle}
                className="titlecss"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <MdOutlineDescription style={{position:'relative' , color:'blue', right:'1.8pc', top:'3.1pc' , fontSize:'1.5pc'}} />
              <Form.Control
                type="text"
                name="updescription"
                value={notes.updescription}
                placeholder="Your Note Description"
                onChange={onChange}
                className="descss"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              
              <AiTwotoneTag style={{position:'relative' , color:'blue', right:'1.8pc', top:'2pc' , fontSize:'1.5pc'}} />
              <Form.Control
                type="text"
                name="uptag"
                value={notes.uptag}
                placeholder="Your Note Tag"
                onChange={onChange}
                className="tagcss"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button ref={closeref} variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleclick}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="row my-3 mx-3">
        <h1>Notes </h1>

        {Note.length !== 0 ? (
          <>
            {Note.map((note) => {
              return (
                <Noteitem
                  key={note._id}
                  update={update}
                  note={note}
                  showAlert={showAlert}
                />
              );
            })}
          </>
        ) : (
          <div className="mx-1">
            <span> No Note Found</span>
          </div>
        )}
      </div>
    </>
  );
};

export default Notes;
