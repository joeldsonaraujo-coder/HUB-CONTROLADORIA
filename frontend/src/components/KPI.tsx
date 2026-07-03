type KPIProps = {
  titulo: string;
  valor: string;
  status: "positivo" | "alerta" | "negativo";
};

const cores = {
  positivo: "#2e7d32",
  alerta: "#f9a825",
  negativo: "#c62828",
};

function KPI({ titulo, valor, status }: KPIProps) {
  return (
    <div className="card">
      <span
        style={{
          color: "#666",
          fontSize: "14px",
        }}
      >
        {titulo}
      </span>

      <h2
        style={{
          color: cores[status],
        }}
      >
        {valor}
      </h2>
    </div>
  );
}

export default KPI;