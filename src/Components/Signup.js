import React, { useState } from "react";
import { Alert, Form, Button } from "react-bootstrap";
import About from'./About'
import { useNavigate } from "react-router-dom";
import { AiOutlineCloud, AiFillInfoCircle } from "react-icons/ai";

const Signup = (props) => {
  const [credential, setcredential] = useState({
    name: "",
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const { showAlert } = props;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:1122/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credential.name,
        email: credential.email,
        password: credential.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.token);
      showAlert("You are Registered", "success");
      navigate("/login");
    } else {
      showAlert("Check Your Credential", "warning");
    }
  };

  const onChange = (e) => {
    setcredential({ ...credential, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="Logos">
        <span>
          <AiOutlineCloud
            style={{
              fontSize: "3pc",
              color: "blue",
              top: "-14px",
              position: "relative",
              right: "-80px",
              filter: "drop-shadow(10px 10px 15px purple)",
            }}
          />
        </span>

        <h
          style={{
            fontSize: "2.5pc",
            marginLeft: "5.5pc",
            color: "black",
            filter: "drop-shadow(10px 10px 15px purple)",
          }}
        >
          Notes
        </h>
      </div>
      <div className="SignupDiv">
        <div style={{ marginTop: "2pc" }}>
          <span
            style={{
              fontSize: "2pc",
              fontWeight: 600,
              color: "green",
              marginTop: "3pc",
              marginLeft: "5pc",
            }}
          >
            Signup{" "}
          </span>
        </div>
        <Form
          className="col-4"
          onSubmit={handleSubmit}
          style={{ marginTop: "2pc", marginLeft: "0.8pc", width: "16pc" }}
        >
          <p style={{ fontSize: "12px" }}>
            <AiFillInfoCircle style={{ fontSize: "1.3pc", color: "blue" }} />{" "}
            Signup data use for your Login
          </p>

          <Form.Group className="mb-2">
            <Form.Control
              type="text"
              value={credential.name}
              placeholder="Name"
              name="name"
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group className="mb-0" controlId="formBasicEmail">
            <Form.Control
              type="email"
              value={credential.email}
              placeholder="Email"
              name="email"
              onChange={onChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              value={credential.password}
              name="password"
              placeholder="Password"
              onChange={onChange}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={{
              width: "15pc",
              marginLeft: "0.4pc",
              backgroundColor: "green",
            }}
          >
            Signup
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Signup;
