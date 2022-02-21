import React from 'react';
import {Alert} from 'react-bootstrap'
const Alerts = (props) => {
    console.log(props)
    const capital = (word)=>{
           const lowerCase = word.toLowerCase();
           return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1)
    }

  return (
      <div>
      {props.alert &&   <Alert variant={props.alert.type} >
    <strong>{capital(props.alert.type)}</strong> : {props.alert.msg}
  </Alert>}


      </div>
  );
};

export default Alerts;
