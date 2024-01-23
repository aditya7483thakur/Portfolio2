import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <div className="app-container container-fluid">
        <div className="row flex-nowrap min-vh-100">
          <SideBar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
