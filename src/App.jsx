import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <header>Navbar</header>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}

export default App;
