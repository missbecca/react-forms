import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  function nameChange(e) {
    setName(e.target.value);
  }

  function emailChange(e) {
    setEmail(e.target.value);
  }
  function passwordChange(e) {
    setpassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, email, password);
    setName("");
    setEmail("");
    setpassword("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={nameChange}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={emailChange}
        />

        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={passwordChange}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Form;
