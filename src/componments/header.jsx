import { useEffect } from "react";
import { Link } from "react-router-dom";
function Header({ userLogged }) {
  useEffect(() => {}, [userLogged]);
  if (userLogged !== "") {
    return (
      <>
        <h1 className="header">Northcoders News</h1>
        <p>sign in as {userLogged}</p>
        <Link to="/signIn" className="link">
          switch account
        </Link>
      </>
    );
  }
  return (
    <>
      <h1 className="header">Northcoders News</h1>
      <Link to="/signIn" className="link">
        sign in
      </Link>
    </>
  );
}

export default Header;
