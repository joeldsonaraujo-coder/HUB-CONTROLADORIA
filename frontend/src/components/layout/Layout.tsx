import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "../../pages/Home";

import "../../styles/layout.css";
import "../../styles/home.css";

function Layout() {
  return (
    <div className="layout">

      <Sidebar />

      <div className="main">

        <Header />

        <Home />

      </div>

    </div>
  );
}

export default Layout;