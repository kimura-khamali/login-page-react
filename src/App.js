import Users from "./Users";
import Login from "./Login";
// import Users from "./Users";
import { useState } from "react";

export const Introduction = ({setModalIsOpen}) => {
  const openModal = () =>{
    setModalIsOpen(true)
  }
  return (
    <>
      <button className="login" onClick={openModal}>Log In</button>
    </>
  );
};

function App() {
  const [IsloggedIn,setIsloggedIn] = useState(false)
  return (
    <>
      {/* <Login /> */}
      <Login setIsloggedIn={setIsloggedIn}/>
      <Users IsloggedIn={IsloggedIn}/>
    </>
  );
}

export default App;

