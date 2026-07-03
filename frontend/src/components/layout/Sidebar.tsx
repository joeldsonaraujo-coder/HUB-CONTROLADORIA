const menuItems = [
  "🏠 Home",
  "📊 Sala de Situação",
  "📈 DRE Gerencial",
  "💰 Receitas",
  "💳 Custos",
  "📉 Despesas",
  "📁 Centro de Custos",
  "⚙ Configurações",
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
            <li key={item}>{item}</li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;