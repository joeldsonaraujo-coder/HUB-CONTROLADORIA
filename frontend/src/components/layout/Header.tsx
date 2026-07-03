function Header() {
  const hoje = new Date().toLocaleDateString("pt-BR");

  return (
    <header className="header">
      <div>
        <h1>HUB de Controladoria</h1>
        <small>Painel Gerencial</small>
      </div>

      <div className="header-info">
        <div className="header-date">
          📅 {hoje}
        </div>

        <div className="header-version">
          Versão 0.2
        </div>
      </div>
    </header>
  );
}

export default Header;