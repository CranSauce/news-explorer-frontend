import React, { useState } from "react";

function SignupForm({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ email, password, username });
//   };

  return (
    <>
      <label className="modal__label">
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="modal__input"
          placeholder="Enter email"
          required
        />
      </label>
      <label className="modal__label">
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="modal__input"
          placeholder="Enter password"
          required
        />
      </label>
      <label className="modal__label">
        Username
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="modal__input"
          placeholder="Enter your username"
          required
        />
      </label>
    </>
  );
}

export default SignupForm;
