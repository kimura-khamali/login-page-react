// import { useState } from "react";

// import "./index.css";
// import { login } from "./utls";
// const Login = () => {
//   const [username, setusername] = useState("");
//   const [password, setpassword] = useState("");
//   console.log({ username });

//   const handleLogin = async (event) => {
//     event.preventDefault();
//     const result = await login({ username, password });
//     console.log({ result });
//   };
//   return (
//     <>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           placeholder="Enter name"
//           type="text"
//           onChange={(event) => setusername(event.target.value)}
//         />
//         <br />
//         <input
//           placeholder="Enter password"
//           type="password"
//           onChange={(event) => setpassword(event.target.value)}
//         />
//         <br />
//         <button type="submit">Login</button>
//       </form>
//     </>
//   );
// };

// export default Login;
// remember items within component -useState up
// add fuctionality -hooks
//atoms
// custom hooks


import { useState } from "react";
import { login } from "./utls";
import "./index.css";

const Login = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const result = await login({ username, password });
      if (result.error) {
        setError(result.error);
      } else {
       onClose(); 
      }
    } catch (error) {
      setError("An error occurred during login.");
    }
  };

  return (
    <>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          placeholder="Enter name"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
        <input
          placeholder="Enter password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;

