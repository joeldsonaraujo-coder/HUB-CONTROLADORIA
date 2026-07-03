import { useEffect, useState } from "react";

import KPI from "../components/KPI";
import { getIndicadores } from "../services/dashboardService";
import type { Indicador } from "../types";

function Dashboard() {
  const [indicadores, setIndicadores] = useState<Indicador[]>([]);

  const [periodo, setPeriodo] = useState("Mensal");
  const [empresa, setEmpresa] = useState("Todas");

  useEffect(() => {
    getIndicadores().then(setIndicadores);
  }, []);

  return (
    <main className="home">
      <h2>📊 Sala de Situação</h2>

      <p>Resumo dos principais indicadores da empresa.</p>

      <div className="dashboard-filtros">
        <select
          value={periodo}
          onChange={(e) => setPeriodo(e.target.value)}
        >
          <option>Mensal</option>
          <option>Trimestral</option>
          <option>Anual</option>
        </select>

        <select
          value={empresa}
          onChange={(e) => setEmpresa(e.target.value)}
        >
          <option>Todas</option>
          <option>Matriz</option>
          <option>Filial Norte</option>
          <option>Filial Sul</option>
        </select>
      </div>

      <div className="cards">
        {indicadores.map((item) => (
          <KPI
            key={item.titulo}
            titulo={item.titulo}
            valor={item.valor}
            variacao={item.variacao}
            status={item.status}
          />
        ))}
      </div>
    </main>
  );
}

export default Dashboard;