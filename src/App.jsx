import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import FooterPro from "./component/FooterPro";

function App() {
  return (
    <>
     <div className=" max-w-screen-2xl mx-auto md:px-4">
     <Header/>
      <div className=" min-h-[ calc(100vh - 80px)]">
      <Outlet />
      </div>
     <FooterPro/>
     </div>
    </>
  );
}

export default App;
