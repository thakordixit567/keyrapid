import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";

function App() {
  return (
    <>
     <div className=" max-w-screen-2xl mx-auto md:px-4">
     <Header/>
      <div className=" min-h-[ calc(100vh - 400px)]">
      <Outlet />
      </div>
     <footer>Footer</footer>
     </div>
    </>
  );
}

export default App;
