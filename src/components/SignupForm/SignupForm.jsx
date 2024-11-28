import { useState } from "react";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

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
          name="email"
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
          name="password"
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
          name="username"
        />
      </label>
    </>
  );
}

export default SignupForm;
