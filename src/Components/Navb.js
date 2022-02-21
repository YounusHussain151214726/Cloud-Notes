import React, { useEffect } from "react";
import "../App.css";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineCloud, AiFillInfoCircle } from "react-icons/ai";
import { BsMoonStarsFill ,BsSunFill} from "react-icons/bs";
const Navb = (props) => {
  let location = useLocation();
  let navigate = useNavigate();
   
  
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const absc = () => {
    if (localStorage.getItem("token")) {
      navigate("/about");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <Navbar
        bg="primary"
        variant="dark"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        <Container>
          <Navbar.Brand className="NavBd">
            {" "}
            <AiOutlineCloud
              style={{
                fontSize: "2pc",
                color: "darkblue",
                top: "-5px",
                position: "relative",
                right: "-5px",
                filter: "drop-shadow(10px 10px 15px black)",
              }}
            />{" "}
            <span style={{ color: "black" }}>Notes</span>{" "}
            <span style={{ fontSize: "15px" }}>| Cloud Notes</span>
          </Navbar.Brand>
          <Nav className="me-auto" id="nHmAb">
            <Nav.Link
              as={Link}
              className={`${location.pathname === "/home" ? "active" : ""}`}
              to="/home"
              id='home'
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={`${location.pathname === "/about" ? "active" : ""}`}
              onClick={absc}
            >
              About
            </Nav.Link>

<Button  onClick={props.toggle}>{props.mode === 'light'? (
  <>
  <BsMoonStarsFill style={{color:'white'}} />
  </>
):(
  <BsSunFill style={{color:'yellow' , fontSize:'1.3pc'}} />
)}</Button>
            {!localStorage.getItem("token") ? (
              <>
                <Nav.Link
                  as={Link}
                  to="/login"
                  className="nLoginB"
                  style={{ color: "brown" }}
                >
                  Login
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/signup"
                  className="nSignB"
                  style={{ color: "green" }}
                >
                  Signup
                </Nav.Link>
              </>
            ) : (
<>
{props.user}

<Nav.Link onClick={handleLogout} className="logoub">
                Logout
              </Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    
     
    </>
  );
};

export default Navb;
