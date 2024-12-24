import { useEffect, useState } from "react";
import { getUsers } from "../api";
import { Navigate, useNavigate } from "react-router-dom";

function SignIn({ setUserLogged }) {
  const [userInput, setUserInput] = useState("");
  const Navigate = useNavigate();
  useEffect(() => {}, []);
  function handleSubmit(e) {
    e.preventDefault();
    getUsers()
      .then((response) => {
        console.log(userInput);
        return response;
      })
      .then((response) => {
        response.rows.map((user) => {
          console.log(user.username, userInput);
          if (user.username === userInput) {
            setUserLogged(userInput);
            Navigate("/");
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function username(e) {
    setUserInput(e.target.value);
    console.log(userInput);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="author"
        onChange={username}
        className="input"
        placeholder="username"
      />
      <input
        type="password"
        id="passcode"
        className="input"
        placeholder="password"
      />
      <button type="submit" className="button-18">
        log in
      </button>
    </form>
  );
}

export default SignIn;
