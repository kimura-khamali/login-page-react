// import Login from "./Login";
import LoginModal from "./Login/loginmodel";
import Users from "./Users";
// import LoginModal from "./Login/loginmodel";

export const Introduction = () => {
  return (
    <div>
      <h1>We are Adalab</h1>
    </div>
  );
};

function App() {
  return (
    <>
      {/* <Login /> */}
      <LoginModal/>
      <Users/>
    </>
  );
}

export default App;
