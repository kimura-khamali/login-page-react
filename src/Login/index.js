import { useState } from "react";
import "./index.css";
import { login } from "./utls";
import { Introduction } from "../App";

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [openModal, setModalIsOpen] = useState(false);
  
  console.log({ username });

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const result = await login({ username, password });
      console.log({ result });
      if (result && result.token) {
        localStorage.setItem('token', result.token);
        setIsLoggedIn(true);
        setModalIsOpen(false);
      } else {
        console.error('Login failed: No token received');
        
      }
    } catch (error) {
      console.error('Login error:', error);
      
    }
  };

  

  return (
    <>
      <Introduction setModalIsOpen={setModalIsOpen} />
      {openModal && (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <input
            placeholder="Enter name"
            type="text"
            onChange={(event) => setUsername(event.target.value)}
          />
          <br />
          <input
            placeholder="Enter password"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <button type="submit">Login</button>
        </form>
      )}
    </>
  );
};

export default Login;