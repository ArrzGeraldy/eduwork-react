import React, { useState } from "react";
import "./index.scss";
import Input from "./Input";
import * as Validator from "validatorjs";

const FromValidator = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  console.log(errors === true);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      email,
      password,
    };

    let rules = {
      email: "required|email",
      password: "required|min:8",
    };

    let validation = new Validator(data, rules);
    validation.passes(); // true
    if (validation.passes()) {
      alert(`Email: ${email}\nPassword: ${password}`);
      setEmail("");
      setPassword("");
    } else {
      // 'The email format is invalid.'
      setErrors([
        ...validation.errors.get("email"),
        ...validation.errors.get("password"),
      ]);
      //   console.log(errors);
    }
  };

  const renderErrors = (errors) => {
    return (
      <ul>
        {errors.map((error, i) => (
          <li key={i} style={{ color: "red" }}>
            {error}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="container">
      <div className="wrapper">
        <h1>From Validator</h1>
        {errors.length > 0 && renderErrors(errors)}
        <form action="" onSubmit={handleSubmit}>
          <Input
            label={"Email"}
            setValue={setEmail}
            value={email}
            type={"text"}
          />
          <Input
            label={"Password"}
            setValue={setPassword}
            value={password}
            type={"password"}
          />
          <button type="submit" style={{ marginTop: "20px", padding: "5px" }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default FromValidator;
