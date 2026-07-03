function Header() {
  const hoje = new Date().toLocaleDateString("pt-BR");

  return (
    <header className="header">
      <div>
        <h1>{appConfig.nome}</h1>
        <small>Painel Gerencial</small>
      </div>

      <div className="header-info">
        <div className="header-date">
          📅 {hoje}
        </div>

        <div className="header-version">
         Versão {appConfig.versao}
        </div>
      </div>
    </header>
  );
}

export default Header;
import { appConfig } from "../../config/appConfig";