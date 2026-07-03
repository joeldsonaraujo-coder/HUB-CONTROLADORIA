import { NavLink } from "react-router-dom";

const menuItems = [
  { label: "🏠 Home", path: "/" },
  { label: "📊 Sala de Situação", path: "/dashboard" },
  { label: "📈 DRE Gerencial", path: "/dre" },
  { label: "⚙ Configurações", path: "/configuracoes" },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>HUB</h2>
        <span>Controladoria</span>
      </div>

      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "menu-link active" : "menu-link"
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;