import React, { useState } from "react";
import "../App.css";
import { Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { AiFillInfoCircle, AiOutlineCloud } from "react-icons/ai";

const Login = (props) => {
  const [credential, setcredential] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const { mode } = props;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:1122/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credential.email,
        password: credential.password,
      }),
    });
    const json = await response.json();
    if (!json.success) {
      props.showAlert("Check Your Credential or Signup First", "warning");
    } else {
      localStorage.setItem("token", json.token);
      navigate("/home");
      props.showAlert("You are Logged In", "success");
    }
  };

  const onChange = (e) => {
    setcredential({ ...credential, [e.target.name]: e.target.value });
  };

  return (
    <div>
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
        </h>{" "}
      </div>
      <div className=" LoginDiv ">
        <div style={{ marginTop: "2pc" }}>
          <span
            style={{
              fontSize: "2pc",
              fontWeight: 600,
              color: "purple",
              marginTop: "3pc",
              marginLeft: "6pc",
            }}
          >
            Login{" "}
          </span>
        </div>

        <Form
          className="col-4"
          onSubmit={handleSubmit}
          style={{ marginTop: "2pc", marginLeft: "0.8pc", width: "16pc" }}
        >
          <p style={{ fontSize: "12px" }}>
            <AiFillInfoCircle style={{ fontSize: "1.3pc", color: "blue" }} />{" "}
            Login with your Signup data
          </p>

          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Control
              type="email"
              value={credential.email}
              placeholder="Email"
              name="email"
              onChange={onChange}
              style={{ width: "15pc" }}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3 " controlId="formBasicPassword">
            <Form.Control
              type="password"
              value={credential.password}
              name="password"
              placeholder="Password"
              onChange={onChange}
              style={{ width: "15pc" }}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={{
              width: "14pc",
              marginLeft: "0.5pc",
              backgroundColor: "brown",
            }}
          >
            Login
          </Button>
        </Form>
        <br />
        <br />
        <h style={{ marginLeft: "2pc" }}>
          Don't have an Account?{" "}
          <Link to="/signup">
            <span>Signup</span>
          </Link>
        </h>
      </div>
    </div>
  );
};

export default Login;
