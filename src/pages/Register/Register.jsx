import React, {useState} from "react";
import "./Register.css";

const Register = () => {
    const [counter, setCounter] = useState (0)

  return (
    <div>
      <h1>Register</h1>
      <h2>Angel gay</h2>{" "}
    <h3>{counter}</h3>
    <button onClick = {()=>{setCounter(counter+1)}}>Increment</button>
    </div>
  );
};

export default Register;
