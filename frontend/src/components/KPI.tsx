type KPIProps = {
  titulo: string;
  valor: string;
  variacao: string;
  status: "positivo" | "alerta" | "negativo";
};

const cores = {
  positivo: "#2e7d32",
  alerta: "#f9a825",
  negativo: "#c62828",
};
const icones = {
  positivo: "▲",
  alerta: "➜",
  negativo: "▼",
};

function KPI({ titulo, valor, variacao, status }: KPIProps) {
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
          marginTop: "15px",
        }}
      >
        {valor}
      </h2>

      <p
  style={{
    marginTop: "8px",
    color: cores[status],
    fontSize: "13px",
    fontWeight: "bold",
  }}
>
  {icones[status]} {variacao}
</p>
    </div>
  );
}

export default KPI;