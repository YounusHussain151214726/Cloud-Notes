import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { MdTitle, MdOutlineDescription,MdFacebook} from "react-icons/md";
import { AiTwotoneTag, AiOutlineMail, AiFillGithub ,AiFillLinkedin} from "react-icons/ai";

const About = () => {
  const us = [];
  const [user, setUser] = useState(us);
  const api = "http://localhost:1122/auth/fetchuser";

  useEffect(async () => {
    const response = await fetch(`${api}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setUser(json);
  }, []);

  console.log(user);

  return (
    
    <>
      <div className="Abd">
        {/* USer Name */}

        <span className='uname'>{user.Name}</span>
      </div>

      {/* Detail About Icon */}
      <section id="Abh">About Cloud-Notes</section>

      <div className="Abp">

        <p1 id="p1">
          Cloud Notes is introduced for convert traditional note carrying way
          into digitalize version.
        </p1>
        <br />
        <p2 id="p2">
          It means if we talk about traditional way we encountered Notebooks ,
          Rough pages , Sticky notes in this way we cannot find no security and
          privacy of notes if any stranger reach out our notes so he can easily
          target our notes which is harmful for us .
        </p2>

        <br />

        <p3 id="p3">
          In Digital Verion we ensure User security first with Signup , Login ,
          Authentiation in this application every user interact with their own
          Notes . because notes are link with user specific Id and Id managed by
          DataBase .
        </p3>

        <br />

        <p4 id="p4">
          {" "}
          So , Database show those Notes who are macthed with user Id.{" "}
        </p4>
      </div>

      <div className="Abi">
        <div className="Abic">
        <section id='Abin' > Information</section>

          <Card
            className="my-3"
            border="success"
            style={{ width: "20rem", height: "10pc", marginLeft: "1pc" }}
          >
            <Card.Header>
              {" "}
              <MdTitle
                style={{
                  position: "relative",
                  color: "blue",
                  fontSize: "1.5pc",
                }}
              />
            </Card.Header>
            <Card.Body>
              <Card.Text>
                {" "}
                This Icon is Symbol of Title in this Inputfield you must Enter
                Your Note Title
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            className="my-3"
            border="danger"
            style={{ width: "20rem", height: "10pc", marginLeft: "1pc" }}
          >
            <Card.Header>
              <MdOutlineDescription
                style={{
                  position: "relative",
                  color: "blue",
                  fontSize: "1.5pc",
                }}
              />
            </Card.Header>
            <Card.Body>
              <Card.Text>
                {" "}
                This Icon is Symbol of Description in this Inputfield you must
                Enter Your Note Description means what this note about
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            className="my-3"
            border="warning"
            style={{ width: "20rem", height: "10pc", marginLeft: "1pc" }}
          >
            <Card.Header>
              <AiTwotoneTag
                style={{
                  position: "relative",
                  color: "blue",
                  fontSize: "1.5pc",
                }}
              />
            </Card.Header>
            <Card.Body>
              <Card.Text>
                {" "}
                This Icon is Symbol of Tag in this Inputfield you must Enter
                Your Note Tag means note are personal , for you , others etc
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* About Developer */}
      <section id='Abch'> About Creator</section>

<div className="Abde">


  <img id='Di' src='https://avatars.githubusercontent.com/u/64804658?v=4' />

<p id='np'>Syed.Mohammad.Younis</p>
<p id='rp'>React Devloper</p>
<span id='mp'><AiOutlineMail  /> younushussain0@gmail.com </span>
        
        

</div>
      <div className="Abu">
      <h id='Abul'>USEFUL LINKS</h>
      <hr/>


      <a href="https://www.facebook.com/Web-Tech-Junction-115032401098631/">
<MdFacebook id='Afb'/>
</a>

<a href='https://www.linkedin.com/mwlite/in/younus-hussain-3357411b2'>
<AiFillLinkedin id='Ald' />
</a>
      
      </div>


    </>
  );
};

export default About;
