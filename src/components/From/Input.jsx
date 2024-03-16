import React from "react";

const Input = ({ label, type, value, setValue }) => {
  return (
    <div>
      <label>{label}</label>
      <br />
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
