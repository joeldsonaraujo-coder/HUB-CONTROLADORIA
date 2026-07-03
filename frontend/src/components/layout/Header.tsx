function Header() {
  const hoje = new Date().toLocaleDateString("pt-BR");

  return (
    <header className="header">
      <div>
        <h1>HUB de Controladoria</h1>
      </div>

      <div className="header-info">
        <span>{hoje}</span>
        <span>Versão 0.1</span>
      </div>
    </header>
  );
}

export default Header;