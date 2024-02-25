import React, { useState } from "react";

const Button = () => {
  const [nilai, setNilai] = useState(0);
  return (
    <div>
      <h1>Action</h1>
      <div className="action">
        <button onClick={() => setNilai((prev) => prev - 1)}>-</button>
        <p>{nilai}</p>
        <button onClick={() => setNilai((prev) => prev + 1)}>+</button>
      </div>
    </div>
  );
};

export default Button;
