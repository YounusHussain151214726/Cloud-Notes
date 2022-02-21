import React from "react";
import Addnotes from "./Addnotes";
import Notes from "./Notes";


const Home = (props) => {
  const { showAlert , mode } = props;
  return (
    <>
      <Addnotes showAlert={showAlert} />

      <Notes showAlert={showAlert} mode={mode} />
    </>
  );
};

export default Home;
