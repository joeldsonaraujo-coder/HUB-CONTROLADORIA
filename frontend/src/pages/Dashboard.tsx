import { useEffect, useState } from "react";

import KPI from "../components/KPI";
import { getIndicadores } from "../services/dashboardService";
import type { Indicador } from "../types";

function Dashboard() {
  const [indicadores, setIndicadores] = useState<Indicador[]>([]);

  useEffect(() => {
    getIndicadores().then(setIndicadores);
  }, []);

  return (
    <main className="home">
      <h2>📊 Sala de Situação</h2>

      <p>Resumo dos principais indicadores da empresa.</p>

      <div className="cards">
        {indicadores.map((item) => (
          <KPI
  key={item.titulo}
  titulo={item.titulo}
  valor={item.valor}
  status={item.status}
/>
        ))}
      </div>
    </main>
  );
}

export default Dashboard;