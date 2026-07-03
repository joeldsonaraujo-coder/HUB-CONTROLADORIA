import Header from "./Header";
import Sidebar from "./Sidebar";

import { Routes, Route } from "react-router-dom";

import Home from "../../pages/Home";
import Dashboard from "../../pages/Dashboard";
import DRE from "../../pages/DRE";
import Configuracoes from "../../pages/Configuracoes";

import "../../styles/layout.css";
import "../../styles/home.css";

function Layout() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dre" element={<DRE />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
        </Routes>
      </div>
    </div>
  );
}

export default Layout;